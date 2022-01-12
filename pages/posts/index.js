import { Head, Layout } from '/components/common'
import { PostsList } from '/components'
import { promises as fs } from 'fs'
import * as matter from 'gray-matter'
import path from 'path'

// const getAllPosts = async dir => {
//   const files = await fs.readdir(dir, 'utf8');
//   console.log({files});
// }

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'content/posts')
  const filenames = await fs.readdir(postsDir)

  const posts = await Promise.all(
    filenames.map(async filename => {
      const filePath = path.join(postsDir, filename)
      const fileContents = await fs.readFile(filePath, 'utf8')
      const { content, data, excerpt } = matter(fileContents)
      
      return {
        filename,
        content,
        data,
        excerpt
      }
    })
  )

  return {
    props: { posts }
  };
}

const Posts = ({ posts }) => {

  return (
    <Layout>
      <Head title='Amends - Posts'/>
      <PostsList posts={posts}/>
    </Layout>
  )
}

export default Posts
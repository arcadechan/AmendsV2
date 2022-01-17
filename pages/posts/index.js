import { Head, Layout } from '/components/common'
import { PostsList } from '/components'
import { promises as fs } from 'fs'
import * as matter from 'gray-matter'
import path from 'path'

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'content/posts')
  const filenames = await fs.readdir(postsDir)

  const posts = await Promise.all(
    filenames.map(async filename => {
      const filePath = path.join(postsDir, filename)
      const { data: { title, date, excerpt, content } } = matter.read(filePath)

      return {
        data: {
          slug: filename.replace('.md', ''),
          title,
          date: date.toISOString().split('T')[0],
          excerpt,
          content
        }
      }
    })
  )

  // Sort newest to oldest
  posts.sort((a,b) => a.data.date > b.data.date ? -1 : 1);

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
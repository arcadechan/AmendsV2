import { Head, Layout } from '/components/common'
import { Post } from '/components'
import matter from 'gray-matter'
import { promises as fs } from 'fs'
import path from 'path'

export const getStaticProps = async ({...ctx}) => {
  const { slug } = ctx.params;
  const { content, data } = matter.read(`content/posts/${slug}.md`);

  return {
    props: {
      content,
      data
    }
  }
}

export const getStaticPaths = async() => {
  const files = await fs.readdir(path.join('content/posts'))

  const paths = files.map( filename => {
    return {
      params: {
        slug: filename.replace('.md', '')
      }
    }
  });

  return {
    paths,
    fallback: false,
  }
}

const BlogPost = ({ content, data }) => {
  const { title, date } = data
  return (
    <Layout>
      <Head title={`Amends - ${title}`}/>
      <Post content={content} date={date} title={title}/>
    </Layout>
  )
}

export default BlogPost
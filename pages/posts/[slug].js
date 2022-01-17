import { Head, Layout } from '/components/common'
import { Post, AudioPreview } from '/components'
import matter from 'gray-matter'
import { promises as fs } from 'fs'
import path from 'path'
import Markdown from 'markdown-to-jsx'

export const getStaticProps = async ({...ctx}) => {
  const { slug } = ctx.params;
  const { data: { title, date, excerpt, content  } } = matter.read(`content/posts/${slug}.md`);

  return {
    props: {
      content,
      data: {
        slug,
        title,
        date: date.toISOString().split('T')[0],
        excerpt,
        content
      }
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
      <Post date={date} title={title}>
        <Markdown 
          options={{
            overrides: {
              'spotifytrackcode': AudioPreview
            }
          }}
        >
          {content}
        </Markdown>
      </Post>
    </Layout>
  )
}

export default BlogPost
import Link from "next/link"
import { marked } from "marked";
import Markdown from "markdown-to-jsx";
import AudioPreview from '/components'


const Post = ({ title, date, content }) => {
  const MARKDOWN_OR_SOMETHING = marked(content);
  console.log({
    content,
    MARKDOWN_OR_SOMETHING
  })

  return (
    <section className='post-container'>
      <h1 className='mb-1'>{title}</h1>
      <p>{date}</p>
      <Markdown
          options={{
            overrides: {
              SpotifyCode: AudioPreview
            }
          }}
        >
          {content}
      </Markdown>
      <div className='mt-5'>
        <Link href='/posts'>
          <a className='block text-center underlined-link'>Back to posts</a>
        </Link>
      </div>
    </section>
  )
}

export default Post
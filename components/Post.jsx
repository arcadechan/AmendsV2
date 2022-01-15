import Link from "next/link"
import { marked } from "marked";

const Post = ({ title, date, content }) => {
  const MARKDOWN_OR_SOMETHING = marked(content);

  return (
    <section className='post-container'>
      <h1 className='mb-1'>{title}</h1>
      <p>{date}</p>
      <div className='mt-3' dangerouslySetInnerHTML={{__html: MARKDOWN_OR_SOMETHING}}/>
      <div className='mt-5'>
        <Link href='/posts'>
          <a className='block text-center underlined-link'>Back to posts</a>
        </Link>
      </div>
    </section>
  )
}

export default Post
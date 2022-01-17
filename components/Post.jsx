import Link from "next/link"
import { postcontainer, postcontent } from '/styles/Post.module.scss'

const Post = ({ title, date, children }) => {
  return (
    <section className={`${postcontainer}`}>
      <h1 className='mb-1'>{title}</h1>
      <p>{date}</p>
      <div className={`${postcontent}`}>
        {children}
      </div>
      <div className='mt-5'>
        <Link href='/posts'>
          <a className='block text-center underlined-link'>Back to posts</a>
        </Link>
      </div>
    </section>
  )
}

export default Post
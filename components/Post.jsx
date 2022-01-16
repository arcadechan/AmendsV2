import Link from "next/link"

const Post = ({ title, date, children }) => {
  return (
    <section className='post-container'>
      <h1 className='mb-1'>{title}</h1>
      <p>{date}</p>
      <div className="post-content">
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
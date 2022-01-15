import Link from 'next/link'
import { postcard } from '/styles/Posts.module.scss'

const PostCard = ({ post }) => {
  const { slug, title, date, excerpt } = post.data

  return (
    <Link href={`/posts/${slug}`} passHref>
      <a title={`Read More: ${title}`}>
        <div className={`post-card my-10 p-5 drop-shadow-lg ${postcard}`}>
          <div className=''>
            <h3 className='mb-1 underline underline-offset-2 decoration-0'>{ title }</h3>
            <p className='align-middle'>{ date }</p>
            { excerpt && <p className='mt-3'>{ excerpt }</p> }
          </div>
        </div>
      </a>
    </Link>
  )
}

export default PostCard
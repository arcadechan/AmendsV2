import Link from 'next/link'
import { postcard } from '/styles/Posts.module.scss'

const PostCard = ({ post }) => {
  const { slug, title, date, excerpt } = post.data

  return (
    <Link href={`/posts/${slug}`} passHref>
      <a>
        <div className={`post-card my-10 p-5 drop-shadow-lg ${postcard}`}>
          <div className=''>
            <h2 className='mb-1'>{ title }</h2>
            <p className='align-middle'>{ date }</p>
            { excerpt && <p className='mt-3'>{ excerpt }</p> }
          </div>
        </div>
      </a>
    </Link>
  )
}

export default PostCard
import Link from 'next/link'

const PostCard = ({ post }) => {
  const { slug, title, date } = post.data

  return (
    <Link href={`/posts/${slug}`} passHref>
      <a>
        <div className='my-10'>
          <div className=''>
            <h2 className='inline-block align-middle mr-5'>{ title }</h2>
            <p className='inline-block align-middle'><small>{ date }</small></p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default PostCard
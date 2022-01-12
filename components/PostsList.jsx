import Link from "next/link"
import { PostCard } from '/components'

const PostsList = ({ posts }) => {
  return (
    posts.length ? (
      <>
        {
          posts.map((post, i) => { 
            return <PostCard post={post} key={i}/>
          })
        }
      </>
    ) : (
      <div className='my-32'>
        <h2 className='text-center uppercase font-bold'>No posts just yet. Sit tight!</h2>
      </div>
    )
  )
}

export default PostsList
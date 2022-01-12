import Link from "next/link"
import { PostCard } from '/components'

const PostsList = ({ posts }) => {
  return (
    posts.length ? (
      <>
        {
          posts.map( post => { 
            return <PostCard post={post}/>
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
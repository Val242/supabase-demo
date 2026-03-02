import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Feed() {
  return (
    <div>
        <h1>Feed</h1>
      <p><Link to= '/posts'>go to posts</Link></p>
        </div>
  )
}

export default Feed
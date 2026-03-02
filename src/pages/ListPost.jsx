import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useNavigate, Link } from 'react-router-dom'



export default function ListPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })

      if (data) setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <div>
      <h2>Posts</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h3 onClick={() => onSelect(post.id)}>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
     <Link to= '/create-post'><p>Make a post</p></Link> 
    </div>
  )
}
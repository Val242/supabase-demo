import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function CreatePost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
 

  const handleCreate = async () => {
   
   try{ const { data: { user }, error } = await supabase.auth.getUser()
   console.log(user) 
   if (!user) return alert('Login first')
        

         if (error) {
        console.log('Error inserting post:', error);
      } 
    await supabase.from('posts').insert({
      user_id: user.id,
      title,
      content
    })

    setTitle('')
    setContent('')
    // alert('Post created')
  }
    catch(error){
        console.error("Error", error.message)
    }
}


  return (
    <div id='post'>
      <h2>Create Post</h2>
      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  )
}
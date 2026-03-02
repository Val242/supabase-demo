import {  React,useState } from 'react'
import { supabase } from '../lib/supabase'

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')

      const handleRegister = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) return alert(error.message)

    // if (data.user) {
    //   await supabase.from('profiles').insert({
    //     id: data.user.id,
    //     full_name: fullName
    //   })
    // }

    alert('Registered')
  }

  return (
  <div>
      <h2>Auth</h2>

      <input placeholder="Full Name" onChange={e => setFullName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />

      <button onClick={handleRegister}>Register</button>
      {/* <button onClick={handleLogin}>Login</button> */}
    </div>
  )
}

export default Register
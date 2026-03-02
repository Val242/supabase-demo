import { React,useState } from 'react'
import { supabase } from '../lib/supabase'
import { useNavigate } from 'react-router-dom'


function Login() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate();
    const [password, setPassword] = useState('')
    // const [fullName, setFullName] = useState('')

     const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) return alert(error.message)

       navigate('/feed')
    alert('Logged in')
 
  }

  return (
  <div>
      <h2>Login</h2>

      {/* <input placeholder="Full Name" onChange={e => setFullName(e.target.value)} /> */}
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />

      {/* <button onClick={handleRegister}>Register</button> */}
       <button onClick={handleLogin}>Login</button> 
    </div>
  )
}

export default Login
import React from 'react'
import { View } from './Login.styles'

const Login = ({handleLogin}) => {
  return (
    <View>
      <div>
        <h1>Login</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button onClick={() => handleLogin()}>Entrar</button>
      </div>
    </View>
  )
}

export default Login

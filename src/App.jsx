import React from 'react'
import { Container, Stack, Title } from "@mantine/core" 
import Login from './Login'

import './App.css'

function App() {

  return (
  <Container>
    <Stack>
      <Title>Login</Title>
      <Login />
    </Stack>
  </Container>  
  )
}

export default App

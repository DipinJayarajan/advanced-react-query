import React from 'react'
import { Container, Stack, Title } from "@mantine/core" 
import Login from './Login'

import './App.css'
import StopWatch from './StopWatch'

function App() {

  return (
  <Container>
    <Stack>
      <Title>Login</Title>
      <Login />
      <Title>StopWatch</Title>
      <StopWatch />
    </Stack>
  </Container>  
  )
}

export default App

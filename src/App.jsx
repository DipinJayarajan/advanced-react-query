import React from 'react'
import { Container, Stack, Title } from "@mantine/core" 
import Login from './Login'

import './App.css'
import StopWatch from './StopWatch'
import Throttle from './Throttle'

function App() {

  return (
  <Container>
    <Stack>
      <Title>Login</Title>
      <Login />
      <Title>StopWatch</Title>
      <StopWatch />
      <Title>Throttle</Title>
      <Throttle />
    </Stack>
  </Container>  
  )
}

export default App

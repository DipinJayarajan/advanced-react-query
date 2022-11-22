import React from 'react'
import { Container, Stack, Title } from "@mantine/core" 
import Login from './Login'

import './App.css'
import StopWatch from './StopWatch'
import Throttle from './Throttle'
import GPS from './GPS'

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
      <Title>GPS</Title>
      <GPS />
    </Stack>
  </Container>  
  )
}

export default App

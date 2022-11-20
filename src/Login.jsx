import React from 'react'
import { Text } from '@mantine/core'
import { useQuery } from 'react-query'


const fetchLogin = () => fetch('/login.json').then((res) => res.json());
const fetchUser = (id) => fetch(`/${id}.json`).then((res) => res.json());

function Login() {
    const { data: login, isError, isLoading } =  useQuery('login', fetchLogin);
    const { data: user } =  useQuery('login', () => fetchUser(login?.id), {
        enabled: !!login,
    } );

    if (isLoading) return <Text>Loading...</Text>

    if (isError) return <Text>Error</Text>

  return (
    <Text>{JSON.stringify(user)}</Text>
  )
}

export default Login
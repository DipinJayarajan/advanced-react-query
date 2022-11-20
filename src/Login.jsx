import React from 'react'
import { Text } from '@mantine/core'
import { useQuery } from 'react-query'


const fetchLogin = () => fetch('/login.json').then((res) => res.json());
const fetchUser = (id) => fetch(`/${id}.json`).then((res) => res.json());

const login = async ( ) => {
  const data = await fetchLogin();
  return await fetchUser(data.id);
}

function Login() {
    const { data , isError, isLoading } =  useQuery('login', login);

    if (isLoading) return <Text>Loading...</Text>

    if (isError) return <Text>Error</Text>

  return (
    <Text>{JSON.stringify(data)}</Text>
  )
}

export default Login
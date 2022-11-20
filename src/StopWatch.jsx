import React from 'react'
import { Text } from '@mantine/core'
import { useRef } from 'react';
import { useQuery } from 'react-query'

function createStopWatch() {
    const StartTime = Date.now();
    return () => {
        return Math.round((Date.now() - StartTime) / 1000);
    }
}

const StopWatch = () => {
    const timerRef = useRef(createStopWatch());
    const { data : time } = useQuery('stopwatch', timerRef.current , {
        refetchInterval: 1000,
    });
  return <Text>Time : {time} </Text>
  
}

export default StopWatch
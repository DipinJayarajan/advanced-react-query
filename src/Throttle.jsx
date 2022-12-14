import { Stack, Text } from '@mantine/core'
import React from 'react'
import { useQuery } from 'react-query';


const subscribeToLog = () => {
    let log = [];
    let logIndex = 0;

    setInterval(() => {
        log.push(`${logIndex}: ${ Date.now()}`);
        logIndex++;
        log = log.slice(-3);
    }, 1000);

    return () => log
};

const logListener = subscribeToLog();

const Throttle = () => {
    const { data: log  } = useQuery('log', logListener, {
        refetchInterval: 1000  ,
    });
  return (
    <Stack>
    {log?.map((entry, index) => (<Text key={index}>{entry}</Text>
    ))}
    </Stack>
    );
}

export default Throttle
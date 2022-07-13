import React, { Component, useState } from 'react'
import Terminal from 'react-console-emulator'

const MyTerminal = (props) =>   {
  const { callBack } = props

  const [commands, setCommands] = useState({
    echo: {
      description: 'Echo a passed string.',
      usage: 'echo <string>',
      fn: (...args) => args.join(' ')
    },
    git: {
      description: '',
      usage: '',
      fn: (...args) => callBack(args.join(' '))
    }
  });

  return (
    <Terminal
      commands={commands}
      welcomeMessage={'Welcome to the React terminal!'}
      promptLabel={'me@React:~$'}
    />
  )
}

export default MyTerminal
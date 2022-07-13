import React, { useState } from 'react'
import MyTerminal from '../terminal/TerminalDisplay'
import MyDisplay from '../display/CanvasDisplay'

const ParentComponent = () => {
   const [command, setCommand] = useState('')

   const callBack = (command) => {
      setCommand(command)
   }

   return (
      <div>
         <MyTerminal callBack={callBack}/>
         <MyDisplay command={command}/>
      </div>
      )
}

export default ParentComponent
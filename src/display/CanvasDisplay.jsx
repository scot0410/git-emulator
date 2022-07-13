import React, {useEffect, useState} from 'react';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

const MyDisplay = (props) => {
    const [command, setCommand] = useState('')

    useEffect(()=> {
        setCommand(props.command)
    }, [props.command])

    const initComp = () => (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Text text="Some text on canvas" fontSize={15} />
                <Circle x={200} y={400} radius={20} fill="green" />
                {/* <Line
                x={200}
                y={280}
                points={[0, 0, 0, 0, 0, 100]}
                tension={0.5}
                closed
                stroke="black"
                /> */}
            </Layer>
            </Stage>
    )

    const renderAction = (command) => {
        switch (command) {
            case "init": 
                return initComp()
            default: 
                return ""
        }
    }

    return (
        renderAction(command)
    );
};

export default MyDisplay
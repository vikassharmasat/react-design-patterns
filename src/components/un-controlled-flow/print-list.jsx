import React from "react";
import { UnControlledFlow } from "./index";

export const PrintUnControlledFlowList = () => {
    const ElementOne = ( { goNext } ) => {
        return <>
            <h1>#1 Element</h1>
            <button onClick={ goNext }>Next Element</button>
        </>
    }
    const ElementTwo = ( { goNext } ) => {
        return <>
            <h1>#2 Element</h1>
            <button onClick={ goNext }>Next Element</button>
        </>
    }
    const ElementThree = ( { goNext } ) => {
        return <>
            <h1>#3 Element</h1>
            <button onClick={ goNext }>Next Element</button>
        </>
    }
    return (
        <UnControlledFlow>
            <ElementOne/>
            <ElementTwo/>
            <ElementThree/>
        </UnControlledFlow>
    )
}

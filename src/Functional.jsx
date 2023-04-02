import React from 'react'
import RecursiveComponentColored from "./components/Functional/recursive_component/RecursiveComponentColored"

import { nestedObject } from "./components/Functional/recursive_component/nestedObject"
import { DangerButton, BigSuccessButton } from "./components/Functional/partially_applied_component/partiallyApply"


const Functional = () => {
    return (
        <div>      <h2>Functional</h2>

            <DangerButton text="Danger Button" />
            <BigSuccessButton text="Big Success Button" />
            <RecursiveComponentColored data={nestedObject} /></div>
    )
}

export default Functional
import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.type === 'vertical' ? 'column' : 'row'}



    `

const Panel = styled.div`
    flex: ${props => props.panelWidth};
  
    ${props => props.left && css`
    background-color: orange;
    min-width: 111px;
    max-width: 320px;
    `}
    ${props => props.right && css`
    background-color: blue;
    `}
 
`




const SplitScreen = ({
    children,
    leftWidth = 1,
    rightWidth = 5,
    type = 'horizontal',

}) => {
    const [left, right] = children
    return (
        <Container type={type}>
            <Panel left panelWidth={leftWidth} leftWidth={1}>
                {left}
            </Panel>
            <Panel right panelWidth={rightWidth} rightWidth={1}>
                {right}
            </Panel>

        </Container >
    )
}

export default SplitScreen
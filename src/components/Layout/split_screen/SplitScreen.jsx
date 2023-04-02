import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.type === 'vertical' ? 'column' : 'row'}



    `

const Panel = styled.div`
    flex: ${props => props.weight};
  
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
    leftWeight = 1,
    rightWeight = 2,
    type = 'horizontal',

}) => {
    const [left, right] = children
    return (
        <Container type={type}>
            <Panel left weight={leftWeight} leftWidth={1}>
                {left}
            </Panel>
            <Panel right weight={rightWeight} rightWidth={1}>
                {right}
            </Panel>

        </Container >
    )
}

export default SplitScreen
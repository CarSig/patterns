import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
    display: flex;`

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
    left: Left,
    right: Right,
    leftWidth = 1,
    rightWidth = 5
}) => {
    return (
        <Container>
            <Panel left panelWidth={leftWidth} leftWidth={1}>
                <Left />
            </Panel>
            <Panel right panelWidth={rightWidth} rightWidth={1}>
                <Right />
            </Panel>

        </Container >
    )
}

export default SplitScreen
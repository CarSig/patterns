import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
    display: flex;`

const Panel = styled.div`
    flex: 1;
    ${props => props.left && css`
    background-color: orange;
    `}
    ${props => props.right && css`
    background-color: blue;
    `}
`




const SplitScreen = ({
    left: Left,
    right: Right }) => {
    return (
        <Container>
            <Panel left>
                <Left />
            </Panel>
            <Panel right>
                <Right />
            </Panel>

        </Container>
    )
}

export default SplitScreen
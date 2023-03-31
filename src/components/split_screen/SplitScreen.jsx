import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;`

const Panel = styled.div`
    flex: 1;`



const SplitScreen = ({
    left: Left,
    right: Right }) => {
    return (
        <Container>
            <Panel>
                <Left />
            </Panel>
            <Panel>
                <Right />
            </Panel>

        </Container>
    )
}

export default SplitScreen
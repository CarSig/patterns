import React from 'react'

const isObject = (x) => typeof x === 'object' && x !== null

const RecursiveComponentColored = ({ data, level = 0 }) => {
    let color;

    switch (level) {
        case 0:
            color = 'red'
            break
        case 1:
            color = 'green'
            break
        case 2:
            color = 'blue'
            break
        case 3:
            color = 'orange'
            break
        case 4:
            color = 'purple'
            break
        default:
            color = 'black'
            break
    }


    if (!isObject(data)) {
        return <li style={{ color }}>{data}</li>
    }

    const pairs = Object.entries(data)
    return (
        <div>
            {pairs.map(([key, value]) => (
                <li key={key} style={{ color }}>
                    {key}
                    <ul>
                        <RecursiveComponentColored data={value} level={level + 1} />
                    </ul>
                </li>
            ))}
        </div>
    )
}

export default RecursiveComponentColored
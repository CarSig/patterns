import React from 'react'

const isObject = (x) => typeof x === 'object' && x !== null


const RecursiveComponent = ({ data }) => {
    if (!isObject(data)) {
        return <li>{data}</li>
    }

    const pairs = Object.entries(data)
    return (
        <div>
            {pairs.map(([key, value]) => (
                <li key={key}>
                    {key}
                    <ul>
                        <RecursiveComponent data={value} />
                    </ul>

                </li>
            ))}
        </div>
    )


}

export default RecursiveComponent
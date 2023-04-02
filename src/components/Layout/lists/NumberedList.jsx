import React from 'react'

const NumberedList = ({ items, resourceName, itemComponent: ItemComponent }) => {
    return (
        <div>

            {items.map((item, index) => (
                <div>
                    <h3>{index + 1}</h3>
                    <ItemComponent key={index /*replace with id */} {...{ [resourceName]: item }} />

                </div>
            ))}
        </div>
    )
}

export default NumberedList
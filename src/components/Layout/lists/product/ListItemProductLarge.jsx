import React from 'react'

const ListItemProductLarge = ({ product }) => {
    const { name, price, description, rating } = product
    return (
        <div>
            <h3>{name}</h3>
            <p>price: {price}</p>
            <h3>description: </h3>
            <p>{description}</p>
            <p>rating: {rating}</p>
        </div>
    )
}

export default ListItemProductLarge
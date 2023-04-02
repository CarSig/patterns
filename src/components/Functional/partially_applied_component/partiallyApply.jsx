export const partiallyApply = (Component, partialProps) => {
    return props => {
        return <Component {...partialProps} {...props} />
    }
}

export const Button = ({ size, color, text, ...props }) => {
    return (
        <button
            {...props}
            style={{
                padding: size === 'large' ? '1rem' : '0.5rem',
                fontSize: size === 'large' ? '1.5rem' : '1rem',
                backgroundColor: color,
            }} {...props}> {text} </button>
    )
}


export const DangerButton = partiallyApply(Button, { color: 'red' })
export const BigSuccessButton = partiallyApply(Button, { size: 'large', color: 'green' })
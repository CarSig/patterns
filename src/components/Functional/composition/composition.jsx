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

export const DangerButton = props => {
    return <Button color="red" {...props} />
}

export const BigSuccessButton = props => {
    return <Button size="large" color="green" {...props} />
}
export const printProps = (Component) => {
    return (props) => {
        return (
            <div>
                console.log(props);
                <Component {...props} />
                <pre>{JSON.stringify(props, null, 2)}</pre>
            </div>
        );
    }
}
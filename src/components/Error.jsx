export const Error = ({errorStatus, errorMessage}) => {
    return (
        <div className="error">
            <p>{errorStatus}</p>
            <p>{errorMessage}</p>
        </div>
    )
}
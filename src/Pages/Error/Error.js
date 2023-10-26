const Error = ({ title, status }) => {
    return(
        <div>
            <h1>{ title }</h1>
            <h3>{ status }</h3>
        </div>
    );
}

export { Error };
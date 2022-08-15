const Palabra = (props) => {
    return (
        <h1 style={{color: "blue", textAlign: "center"}} key={props.key}>{props.palabra}</h1>
    )
}

export default Palabra
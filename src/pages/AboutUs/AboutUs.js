

export default function (props) {
    console.log(props);
    return (
        <>
            <h1>{props.text.title}</h1>
            <p>{props.text.subtitle}</p>
        </>
    )
}

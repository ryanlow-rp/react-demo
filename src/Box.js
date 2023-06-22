export default function Box(props) {
    const color = props.bgcolor ?? "white"
    let number = 0
    if (parseInt(props.number)) {
        number = parseInt(props.number)
    } 
    return (
        <>
            <div
                style={{
                    border: '5px solid white',
                    width: '100px',
                    height: '100px',
                    backgroundColor:color
                }}
            >
                {number}
            </div>
        </>
    )
}
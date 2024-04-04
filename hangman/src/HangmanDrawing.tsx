const HEAD = (
    <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "-30px"
    }}></div>
)
const BODY = (
    <div style={{
        width: "10px",
        height: "80px",
        background:"black",
        position: "absolute",
        top: "120px",
        right: "0px"
    }}></div>
)
const LEFTARM = (
    <div style={{
        width: "10px",
        height: "40px",
        background:"black",
        position: "absolute",
        transform: "rotate(45deg)",
        top: "120px",
        right: "15px"
    }}></div>
)
const RIGHTARM = (
    <div style={{
        width: "10px",
        height: "40px",
        background:"black",
        position: "absolute",
        transform: "rotate(135deg)",
        top: "120px",
        right: "-15px"
    }}></div>
)
const LEFTLEG = (
    <div style={{
        width: "10px",
        height: "40px",
        background:"black",
        position: "absolute",
        transform: "rotate(45deg)",
        top: "190px",
        right: "15px"
    }}></div>
)
const RIGHTLEG = (
    <div style={{
        width: "10px",
        height: "40px",
        background:"black",
        position: "absolute",
        transform: "rotate(135deg)",
        top: "190px",
        right: "-15px"
    }}></div>
)
export function HangmanDrawing() {
    return <div style={{position: "relative"}}>
        {HEAD}
        {BODY}
        {LEFTARM}
        {RIGHTARM}
        {LEFTLEG}
        {RIGHTLEG}
        <div style={{height: "10px", width: "200px", background:"black", marginLeft: "120px"}}/>
        <div style={{height: "50px", width: "10px", background:"black", marginLeft: "310px", position: "absolute", top: 0, right: 0}}/>
        <div style={{height: "400px", width: "10px", background:"black", marginLeft: "120px"}}/>
        <div style={{height: "10px", width: "250px", background:"black"}}/>
    </div>
}
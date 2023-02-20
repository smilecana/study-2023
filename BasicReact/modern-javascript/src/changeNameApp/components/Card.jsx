import { EditButton } from "./EditButton";

const style = {
    width: "300px",
    height: "200px",
    margin: "8px",
    borderRadius: "8px",
    backgroundColor : "#e9dbd0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}

export const Card = () => {
    return (
        <div style={style}>
            <p>하나 박</p>
            <EditButton/>
        </div>
    )
}
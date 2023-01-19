import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
            style={{
                width: "100vw",
                height: " 100vh",
                padding: "1.5rem",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white"

            }}
        >
            <p> Hello, It's webstie you can change theme</p>
            <button onClick = {toggleTheme}>Changing Theme</button>
        </div>
    )
}

export default MainContent;

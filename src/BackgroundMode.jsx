import React, {useEffect, useRef, useState} from "react";

export const BackgroundMode = () => {
    const [backgroundMode, setBackgroundMode] = useState(localStorage.getItem("mode") ? localStorage.getItem("mode") : "light");
    const h1Ref = useRef();
    useEffect(() => {
        localStorage.setItem("mode", "light")
        document.body.className = backgroundMode;
        h1Ref.current.className = backgroundMode + "h1"
    }, [backgroundMode]);


    const changeMode = () => {

        if (backgroundMode === "light") {
            setBackgroundMode("dark");
        } else {
            setBackgroundMode("light");
        }

    }

    return(
        <div className="mode">
            <h1 ref={h1Ref}>React Light Mode</h1>
            <div className="modeBtn">
                <button onClick={changeMode}>{backgroundMode === "light" ? "Dark Mode" : "Light Mode"}</button>
            </div>

        </div>
    )
}
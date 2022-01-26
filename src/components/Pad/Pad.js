import "./Pad.css";
import React, { useState, useEffect } from "react";

const Pad = (props) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    const handleKeyPress = (e) => {
        if (e.keyCode === props.keyCode) {
            playSound();
        }
    };

    const playSound = () => {
        const audioTag = document.getElementById(props.keyTrigger);
        setActive(true);
        setTimeout(() => setActive(false), 200);
        audioTag.volume = props.volume;
        audioTag.currentTime = 0;
        audioTag.play();
        props.setDisplay(props.id);
    };

    return (
        <div className="drum-pad" onClick={playSound}>
            <audio className="clip" id={props.keyTrigger} src={props.url} />
            {props.keyTrigger}
        </div>
    );
};

export default Pad;

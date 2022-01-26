import "./App.css";
import Pad from "../Pad/Pad";
import React, { useState } from "react";

const App = () => {
    const [volume, setVolume] = useState(0.5);
    const [display, setDisplay] = useState("Try it out!");
    const [padBank, setPadBank] = useState(bankOne);

    const selectBank = () => {
        padBank === bankOne ? setPadBank(bankTwo) : setPadBank(bankOne);
    };

    const bankSlider =
        padBank === bankOne
            ? {
                  float: "left",
              }
            : {
                  float: "right",
              };

    return (
        <div className="App">
            <div className="drum-machine">
                <div className="display">
                    <div className="container">
                        <div className="small-display">
                            <h2>{display}</h2>
                        </div>
                        <div className="volume-slider">
                            <h2>Volume</h2>
                            <input
                                type="range"
                                step="0.01"
                                onChange={(e) => setVolume(e.target.value)}
                                value={volume}
                                max="1"
                                min="0"
                            />
                        </div>
                        <div className="bank">
                            <h2>Bank</h2>
                            <div className="select" onClick={selectBank}>
                                <div className="inner" style={bankSlider} />
                            </div>
                        </div>
                    </div>
                    <div className="drums">
                        {padBank.map((clip, i) => (
                            <Pad
                                key={i}
                                volume={volume}
                                setDisplay={setDisplay}
                                id={clip.id}
                                keyTrigger={clip.keyTrigger}
                                keyCode={clip.keyCode}
                                url={clip.url}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

const bankOne = [
    {
        keyCode: 81,
        keyTrigger: "Q",
        id: "Heater-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
        keyCode: 87,
        keyTrigger: "W",
        id: "Heater-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
        keyCode: 69,
        keyTrigger: "E",
        id: "Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
        keyCode: 65,
        keyTrigger: "A",
        id: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
        keyCode: 83,
        keyTrigger: "S",
        id: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
        keyCode: 68,
        keyTrigger: "D",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Kick-n'-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
        keyCode: 88,
        keyTrigger: "X",
        id: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
        keyCode: 67,
        keyTrigger: "C",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
];

const bankTwo = [
    {
        keyCode: 81,
        keyTrigger: "Q",
        id: "Chord-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
        keyCode: 87,
        keyTrigger: "W",
        id: "Chord-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
        keyCode: 69,
        keyTrigger: "E",
        id: "Chord-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
        keyCode: 65,
        keyTrigger: "A",
        id: "Shaker",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
        keyCode: 83,
        keyTrigger: "S",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    {
        keyCode: 68,
        keyTrigger: "D",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Punchy-Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
        keyCode: 88,
        keyTrigger: "X",
        id: "Side-Stick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
        keyCode: 67,
        keyTrigger: "C",
        id: "Snare",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
];

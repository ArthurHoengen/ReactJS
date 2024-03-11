import React from "react";

const fiftyFifty = Math.random() <0.5;

function Plan() {
    let task;
    if(fiftyFifty === true) {
        task = "Tonight I'm going out WOOO"
    } else {
        task = "Tonight I'm goint to bed WOOO"
    }
    return (
        <h1>{task}</h1>
    );
}

export default Plan;
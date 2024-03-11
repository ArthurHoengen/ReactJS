import React from "react";

export default function Player(props) {
    return (
        <>
            <h1>{props.songName}</h1>
            <h2>{props.artist}</h2>
        </>
    );
}
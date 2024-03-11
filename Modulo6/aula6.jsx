import React from "react";

export default function Greetings(props) {
    if (props.signedIn === false) {
        return <h1>Please login.</h1>;
    } else {
        return (
            <>
                <h1>Welcome back, {props.name}!</h1>
                <article>Latest Movie: A Computer Bug's life</article>
            </>
        );
    }
}
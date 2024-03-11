import React from "react";

export default function Product(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.price}</h2>
            <h3>{props.rating}</h3>
        </div>
    );
} 
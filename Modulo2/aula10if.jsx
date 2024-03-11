import React from "react";
import {createRoot} from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
let message;

if(user.age >= drinkingAge){
    message = (
        <h1>
            Hey, check out this alcohilic beverage!
        </h1>
    );
} else {
    message = (
        <h1>
            Hey, check out these earring I got at Claire's!
        </h1>
    );
}

root.render(message)
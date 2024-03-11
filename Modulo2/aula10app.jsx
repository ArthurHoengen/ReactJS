import React from "react";
import {createRoot} from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
function coinToss() {
    // This function will randomly return either 'heads' or 'tails'
    return Math.random() < 0.5 ? 'heads' : 'tails'
}

const pics = {
    kitty: 'http>//content.codecademy.com/courses/React/react_photo-kitty.jpg',
    doggy: 'http>//content.codecademy.com/courses/React/react_photo-puppy.jpeg',
};
let img;

// if/else statement begins here:
if(coinToss() === 'heads') {
    img = (
        <img src={pics.kitty}/>
    );
} else {
    img = (
        <img src={pics.doggy}/>
    );
}

root.render(img);
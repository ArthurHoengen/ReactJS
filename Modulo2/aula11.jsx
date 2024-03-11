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

const img = <img src={pics [coinToss() === "heads"? "kitty" : "doggy"]} />;

root.render(img);
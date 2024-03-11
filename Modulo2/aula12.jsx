import React from "react";
import {createRoot} from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
//Only half the time as true
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
    <div>
        <h1>My Favorite Foods</h1>
        <ul>
            <li>Sushi Burrito</li>
            <li>Rhubarb Pie</li>
            {!judgmental && <li>Nacho Cheez Straigh Out The Jar</li>}
            <li>Broiled Grapefruit</li>
        </ul>
    </div>
);

root.render(favoriteFoods);
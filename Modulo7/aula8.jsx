import React, { useState } from "react";

function Musical() {
    const [state, setState] = useState({
        title: "Best Musical Ever",
        actors: ["George Wilson", "Tim Hughes", "Larry Clements"],
        locations: {
            Chicago: {
                dates: ["1/1", "2/2"],
                address: "Chicago theater"
            },
            SanFrancisco: {
                dates: ["5/2"],
                address: "sf theater"
            }
        }
    })
}

function MusicalRefactored() {
    const [title, setTitle] = useState("Best Musical Ever");
    const [actors, setActors] = useState(["George Wilson", "Tim Hughes", "Larry Clements"]);
    const [location, setLocations] = useState({
        Chicago: {
            dates: ["1/1", "2/2"],
            address: "Chicago theater"
        },
        SanFrancisco: {
            dates: ["5/2"],
            address: "sf theater"
        }
    })
}
import React from "react";

const redPanda = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
    alt: 'Red Panda',
    width: '200px'
  };

function RedPanda() {
    return (
        <>
            <h1>Cute red Panda</h1>
            <img src={redPanda.src} alt={redPanda.alt} width={redPanda.width}/>
        </>
    )
}

export default RedPanda
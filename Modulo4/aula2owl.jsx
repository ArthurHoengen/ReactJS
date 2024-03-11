import React from "react";

const owl = {
    title: "Excellent Owl",
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  };

function Owl() {
    return (
        <>
            <h1>{owl.title}</h1>
            <img src={owl.src} alt={owl.alt}/>
        </>
    )
}

export default Owl
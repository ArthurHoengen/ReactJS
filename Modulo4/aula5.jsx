import React from "react";

function Botao() {
    function handleClick() {
        alert("Botão pressionado")
    }
    return <button onClick={handleClick}>Botão</button>
}

export default Botao;
import React from "react";
import Botao from "../Modulo4/aula5.jsx"


function Talker() {
    function talk() {
        let speech = '';
        for (let i=0; i < 10000; i++){
            speech += 'blah ';
        }
        alert(speech);
    }
    return <Botao/>
}
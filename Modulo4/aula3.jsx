import React from "react";

const frutas = [
    {
        title: "Laranja",
        src: "https://hortifrutijardins.com.br/wp-content/uploads/2020/06/laranja-1548279387.jpg"
    },
    {
        title: "Maçã",
        src: "https://scfoods.fbitsstatic.net/img/p/maca-gala-nacional-unidade-70694/257204.jpg?w=800&h=800&v=no-change&qs=ignore"
    },
    {
        title: "Uva",
        src: "https://cdn.awsli.com.br/2500x2500/1294/1294025/produto/62683007/4bcd77e6c6.jpg"
    }
];

function Fruta() {
    const fruta = frutas[Math.floor(Math.random() *3)];
    return (
        <>
            <h1>{fruta.title}</h1>
            <img src={fruta.src}/>
        </>
    );
}

export default Fruta;
import React from "react";
import dadosIniciais from "./data/dados.json";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div>
      <Banner
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"By Espaço Maker e AUTOBOTS"}
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carousel category={dadosIniciais.categorias[1]} />
      <Carousel category={dadosIniciais.categorias[2]} />
      <Carousel category={dadosIniciais.categorias[3]} />
    </div>
  );
}

export default App;

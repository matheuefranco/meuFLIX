import React, { useEffect, useState }  from "react";
//import dadosIniciais from "./data/dados.json";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import repository from "./Repository.js"

function App() {
  const [dadosVideos, setDadosVideo] = useState([]);
  useEffect(() => {
    repository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosVideo(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
<div >
      {dadosVideos.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <Banner
                videoTitle={categoria.videos[0].titulo}
                url={categoria.videos[0].url}
                videoDescription={categoria.videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={categoria}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </div>
  );
}

export default App;

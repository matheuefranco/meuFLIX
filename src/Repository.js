const URL_CATEGORIAS = `http://localhost:8080/categorias`;
const URL_VIDEOS = `http://localhost:8080/videos`;

function getCategorias() {
  return fetch(`${URL_CATEGORIAS}`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }
    throw new Error("Não foi possível pegar os dados :(");
  });
}

function getVideos() {
  return fetch(`${URL_VIDEOS}`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }
    throw new Error("Não foi possível pegar os dados :(");
  });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIAS}?_embed=videos`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error("Não foi possível pegar os dados :(");
  });
}

export default {
  getAllWithVideos,
  getCategorias,
  getVideos,
};

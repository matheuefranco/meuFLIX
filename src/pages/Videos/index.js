import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./index.css"
import repository from "../../Repository.js"
import ModalDialog from "../../components/Modal";
import config from "../../config.js";

function CadastroVideo() {
    const { register, handleSubmit, errors } = useForm();
    const [categorias, setCategorias] = useState([]);

    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {setOpen(true);};
    const handleNo = () => {  
      setOpen(false); 
      history.push('/');
    };
    const handleYes = () => {
      setOpen(false);
    };

    useEffect(() => {
      repository.getCategorias().then(async (categorias) => {
        await setCategorias(categorias);
      });
    }, []);

    function onSubmit(dados) {
      console.log("Dados:", dados);
      fetch(`${config.URL_BACKEND}/videos`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...dados,
          categoriaId: Number(dados.categoriaId),
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(() => {
          console.log("Cadastrou com sucesso!");
        })
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", JSON.stringify(response)))
        .then(handleClickOpen())
    }


    return (
         <div>
      <Header />
          <div className="corpo" >
            
            <form className="container"
              id="video-form"
              onSubmit={handleSubmit(onSubmit)}
              
            >
            <h1> Cadastro de Vídeos </h1>
              <input
                type="text"
                className="form-control"
                id="titulo"
                placeholder="Título"
                autofocus
                name="titulo"
                ref={register({ required: "Preencha este campo." })}
              />
              <p>{errors.titulo?.message}</p>
              <br />
              <textarea
                type="text"
                className="form-control"
                placeholder="Descrição"
                name="description"
                ref={register({ required: "Preencha este campo." })}
              />
              <p>{errors.description?.message}</p>
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="Youtube URL"
                name="url"
                ref={register({ required: "Preencha este campo." })}
              />
              <p>{errors.url?.message}</p>
              <br />
              <select className="form-control" name="categoriaId" ref={register}>
                {categorias.map((value) => (
                  <option key={value.id} value={value.id}>
                    {value.titulo}
                  </option>
                ))}
              </select>
              <br />
              <input
                type="submit"
                className="btn btn-primary btn-lg"
                value="Salvar"
              />
            </form>
            <Link to="/categorias">Cadastrar Categoria </Link>
            </div>
            <ModalDialog 
             open = {open}
             handleClose = {handleNo}
             titulo = 'Cadastrado com sucesso'
             texto = 'Deseja fazer outro cadastro?'
             handleSim = {handleYes}
             handleNao = {handleNo}
          />
          <Link to="/">
            Ir para home
          </Link>
            <Footer />
            </div>

);
}
export default CadastroVideo;

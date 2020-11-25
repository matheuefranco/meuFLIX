import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./index.css"

function CadastroVideo() {
    const { register, handleSubmit, errors } = useForm();
    const [categorias, setCategorias] = useState([]);

    return (
         <div>
      <Header />
          <div className="corpo" >
            
            <form className="container"
              id="video-form"
              onSubmit={handleSubmit()}
              
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
            <Footer />
            </div>

);
}
export default CadastroVideo;

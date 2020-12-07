import React, {useState, useEffect} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import "./index.css"
import ModalDialog from '../../components/Modal';
import config from "../../config.js";

function CadastroCategoria() {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {setOpen(true);};
    const handleNo = () => {  
      setOpen(false); 
      history.push('/');
    };
    const handleYes = () => {
      alert("Clicou em sim");
      setOpen(false);
    };



    function onSubmit(dados) {
      console.log("Dados:", dados);
      fetch(`${config.URL_BACKEND}/categorias`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      })
        .then(function (response) {
          return response.json();
        })
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", JSON.stringify(response)))
        .then(handleClickOpen());     
        console.log(dados);
    }
    return (
        <div className="corpo">
        <Header />
         <h1>  Cadastro Categoria </h1>
         <form onSubmit={handleSubmit(onSubmit)} className="form-group" className="container">
         <input type="text" className="form-control" placeholder="Título " name="titulo" ref={register({required: true})} />
          <br />
          <input type="text" className="form-control" placeholder="Descrição Extra" name="descricao" ref={register({required: true})} />
          <br />
          <input type="text" className="form-control" placeholder="Link Extra" name="url" ref={register({required: true})} />
          <br />
          <input type="color" className="form-control" placeholder="Cor" name="cor" ref={register({required: true})} />
          <br />           
           <input type="submit" className="btn btn-primary btn-lg" value="Salvar"/>
         </form>
         <br /> 
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
         )
};

export default CadastroCategoria;
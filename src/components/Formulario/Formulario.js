import { useState } from "react";

import Boton from "../Boton/Index";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import "./Formulario.css";

const Formulario = () => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("manejar el envio");
    let datosAEnviar = {
      nombre,
      puesto,
      foto
    }
    console.log(datosAEnviar);
  };
  return (
    <section className="formulario">
      <form action="" onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear al colaborador</h2>
        <CampoTexto 
        titulo="Nombre" 
        placeholder="Ingrese su nombre" 
        required 
        valor= {nombre}
        actualizarValor= {actualizarNombre}
        />
        <CampoTexto 
        titulo="Puesto" 
        placeholder="Ingrese su puesto" 
        required
        valor= {puesto}
        actualizarValor= {actualizarPuesto}
         />
        <CampoTexto
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor= {foto}
        actualizarValor= {actualizarFoto}
        />
        <ListaOpciones />
        <Boton>Crear</Boton>
      </form>
    </section>
  );
};

export default Formulario;

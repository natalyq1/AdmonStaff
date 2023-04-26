import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario/Formulario";
import Header from "./components/Header/Header";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
    equipo: 'Data Science',
    foto: 'https://github.com/christianpva.png',
    nombre: 'Christian Velasco',
    puesto: 'Head de Alura e instructor'

  }]);//arreglo vacio o dejo un arreglo con algo que deso que me aparesca por default
  //ternario --> condicion ? seMuestra : noSeMuestra
  //cortocircuito--> condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log('nuevo colaborador', colaborador);
    //spread operator para agregar ... esto copia el arreglo actual
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Lista de equipos en un objeto
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      titulo: "Innovación y gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ];
  return (
    <div>
      <Header />
      {/*  {mostrarFormulario ? <Formulario /> : <></>}*/}
      {mostrarFormulario && (
        <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador ={registrarColaborador} />
      )}

      <MiOrg cambiarMostrar={cambiarMostrar} />
      {/*  recorrer un arreglo*/}
      {equipos.map((equipo) => (
        <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores ={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

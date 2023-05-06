import { useState } from "react";
import { v4 as uuid } from "uuid"
import "./App.css";
import Formulario from "./components/Formulario/Formulario";
import Header from "./components/Header/Header";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]);//arreglo vacio o dejo un arreglo con algo que deso que me aparesca por default
  //ternario --> condicion ? seMuestra : noSeMuestra
  //cortocircuito--> condicion && seMuestra

//Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log('elimina colaborador ', id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores);
  }

  //Actualizar color de equipo
const actualizarColor = (color, id) => {
  console.log('actualizar: ', color, id);
  const equiposActualizados = equipos.map((equipo) => {
    if (equipo.id === id) {
      equipo.colorPrimario = color
    }
    return equipo
  })
  actualizarEquipos(equiposActualizados)
}
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
   // console.log('nuevo colaborador', colaborador);
    //spread operator para agregar ... esto copia el arreglo actual
    actualizarColaboradores([...colaboradores, colaborador])
  }

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid()}])
  }

  
  return (
    <div>
      <Header />
      {/*  {mostrarFormulario ? <Formulario /> : <></>}*/}
      {mostrarFormulario && (
        <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador ={registrarColaborador} 
        crearEquipo={crearEquipo}
        />
      )}

      <MiOrg cambiarMostrar={cambiarMostrar} />
      {/*  recorrer un arreglo*/}
      {equipos.map((equipo) => (
        <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores ={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

import Colaborador from "../Colaborador";
import "./Equipo.css";

const Equipo = (props) => {
    //destructuracion
    const { titulo, colorPrimario, colorSecundario} = props.datos

    const obj = {
        backgroundColor: colorSecundario
    }

    const estilotitulo = { boderColor: colorPrimario}

  return <section className="equipo" style={obj}>
    <h3 style={estilotitulo}>{titulo}</h3>
    <div className="colaboradores">
      <Colaborador />
      <Colaborador />
      <Colaborador />
    </div>
  </section>;
};

export default Equipo;
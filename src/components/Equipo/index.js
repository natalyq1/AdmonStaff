import Colaborador from "../Colaborador";
import "./Equipo.css";

const Equipo = (props) => {
  //destructuracion
  const { titulo, colorPrimario, colorSecundario } = props.datos;
  const { colaboradores } = props;

  const obj = {
    backgroundColor: colorSecundario,
  };

  const estilotitulo = { boderColor: colorPrimario };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={obj}>
          <h3 style={estilotitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador datos={colaborador} 
              key={index} 
              colorPrimario={colorPrimario}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;

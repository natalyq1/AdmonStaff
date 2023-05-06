import Colaborador from "../Colaborador";
import "./Equipo.css";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
  //destructuracion
  const { titulo, colorPrimario, colorSecundario, id } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;

  const obj = {
    backgroundColor: hexToRgba(colorPrimario, 0.45) 
  };

  const estilotitulo = { boderColor: colorPrimario };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={obj}>
          <input
          type="color"
          className="input-color"
          value={ hexToRgba(colorPrimario, 0.55) }
          onChange={(evento) =>{
            actualizarColor(evento.target.value, id);
          }}
           />
          <h3 style={estilotitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador datos={colaborador} 
              key={index} 
              colorPrimario={colorPrimario}
              eliminarColaborador={eliminarColaborador}
              like ={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;

import Boton from "../Boton/Index";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import "./Formulario.css";

const Formulario = () => {

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log('manejar el envio', e);
    }
  return (
    <section className="formulario">
      <form action="" onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear al colaborador</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingrese su nombre" required/>
        <CampoTexto titulo="Puesto" placeholder="Ingrese su puesto" required/>
        <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required/>
        <ListaOpciones />
        <Boton>Crear</Boton>
      </form>
    </section>
  );
};

export default Formulario;

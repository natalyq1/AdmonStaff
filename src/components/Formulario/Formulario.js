import CampoTexto from '../CampoTexto'
import './Formulario.css'


const Formulario = () => {
    return <section className='formulario'>
        <form action="">
            <h2>Rellena el formulario para crear al colaborador</h2>
            <CampoTexto titulo='Nombre' placeholder='Ingrese su nombre'/>
            <CampoTexto titulo='Puesto' placeholder='Ingrese su puesto'/>
            <CampoTexto titulo='Foto' placeholder='Ingresar enlace de foto'/>
        </form>
    </section>
}

export default Formulario
import './ListaOpciones.css'

const ListaOpciones = () => {

    //metodo map -> arreglo.map( (equipo, index) =>{ return <option> </option>  })
const equipos = [
    'Programación',
    'Front End',
    'Data Science',
    'Devops',
    'UX y Diseño',
    'Móvil',
    'Innovación y gestión',
]

    return <div className="lista-opciones">
        <label htmlFor="">Equipos</label>
        <select name="" id="">
            { equipos.map( (equipo, index) => {
                return <option key={index}> {equipo} </option>
            } ) }
            
        </select>
    </div>
}
export default ListaOpciones
//el mismo recorrido del map en una sola linea
//{ equipos.map( (equipo, index) => <option key={index}> {equipo} </option> ) }
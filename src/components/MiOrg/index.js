//import { useState } from "react";
import "./MiOrg.css";
const MiOrg = (props) => {
  //Estado - hooks
  //useState()
  //const [nombreVariable, funcionActualiza] = useState(valorInicial)
  console.log(props);
  /*
  const [mostrar, actualizarMostrar] = useState(true);
  const manejarClick = () => {
    console.log("mostrar/ocultar", !mostrar);
    actualizarMostrar(!mostrar);
  };
  */

  return (
    <section className="orgSection">
      <h3 className="title">Mi organización</h3>
      <img src="/img/botonAdd.png" alt="adicionar" onClick={props.cambiarMostrar} />
    </section>
  );
};
export default MiOrg;

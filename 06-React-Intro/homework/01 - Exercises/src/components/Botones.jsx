import React from "react";

//props {
//   alerts: { m1: "aprobado", m2: "en curso"}
// }
export default class Botones extends React.Component {
   
    render() {
        return(
            <div>
            <button onClick={() => alert(this.props.alerts.m1)}>Módulo 1</button>
            <button onClick={() => alert(this.props.alerts.m2)}>Módulo 2</button>
        </div>
        )
       
    }
}
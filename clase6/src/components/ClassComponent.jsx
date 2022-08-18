import { Component } from "react";

export default class ClassComponent extends Component {
    render() {
        return (
        <li>
        {this.props.nombre} 
        {this.props.invitacion ? ' está invitado ' : ' no está invitado '}
         a la fiesta
         </li>
        )
        
    }
}
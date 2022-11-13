import "./ListOfElements.css"
import React from "react";
import {Link} from "react-router-dom";

function RenderElement(props) {
    if (props.info === undefined) {return;}
    return (
        <li key={props.info.id}>
            <Link to={props.info.link}>{props.info.name}</Link>
        </li>
    );
}

function RenderList(props) {
    if (props.elements === undefined) {
        return;
    }
    return (
        <ul className="List">
            {props.elements.map((element) => <RenderElement info={element} />)}
        </ul>
    );
}

export default function ListOfElements(props) {
    return (<RenderList elements={props.itens} />);
}
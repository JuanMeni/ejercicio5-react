import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTarea = (props) => {
  return (
    <div>
      <ListGroup>
        {props.arregloTarea.map((item, posicion) => (
          <ItemTarea key={posicion} tareaCargada={item} borrarTarea={props.borrarTarea} ></ItemTarea>
        ))}
      </ListGroup>
    </div>
  );
};

export default ListaTarea;

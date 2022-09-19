import React from 'react';
import {ListGroup} from 'react-bootstrap'
import ItemTarea from './ItemTarea';

const ListaTareas = (props) => {
    return (
        <div>
            <ListGroup>
            {
                props.arregloTareas.map((item) => <ItemTarea key={item._id} tareaCargada={item} borrarTarea={props.borrarTarea}></ItemTarea>)
            }
            </ListGroup>            
        </div>
    );
};

export default ListaTareas;
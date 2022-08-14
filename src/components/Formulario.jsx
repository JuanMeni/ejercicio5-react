import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTarea";

const Formulario = () => {
    
    const[arregloTarea,setArregloTarea] = useState([]) 
    const[tarea, setTarea] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        setArregloTarea([...arregloTarea, tarea]);
        setTarea('');
    }

    const borrarTarea = (nombre) =>{
      let arregloModificado = arregloTarea.filter((valor)=>{return valor !== nombre})
      setArregloTarea(arregloModificado);
  }

  return (

    <div>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="my-5 d-flex">
        <Form.Control type="text" placeholder="Tarea..." 
        onChange={(e)=>{setTarea(e.target.value.trimStart())}}
        value={tarea}/>
      <Button variant="primary" type="submit" className="ms-1">
        Enviar
      </Button>
      </Form.Group>
    </Form>
    <ListaTarea arregloTarea={arregloTarea} borrarTarea={borrarTarea}></ListaTarea>
    </div>
  );
};

export default Formulario;
import React, {useState, useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTarea";

const Formulario = () => {
    
    let tareaLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || []
    const[arregloTarea,setArregloTarea] = useState(tareaLocalStorage) 
    const[tarea, setTarea] = useState('')

    useEffect(()=>{
        console.log('prueba de ciclo de vida');
        localStorage.setItem('listaTareas', JSON.stringify(arregloTarea))
    },[arregloTarea])

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
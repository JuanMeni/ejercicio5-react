import React, {useState, useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const Formulario = () => {
  const URL = process.env.REACT_APP_API_TAREAS;
  const [arregloTareas, setArregloTareas] = useState([]);
  const [tarea, setTarea] = useState('');
  
  useEffect(() => {
      consultarAPI();
  },[])
  
  const consultarAPI = async () => {
      try {
          const respuesta = await fetch(URL);
          const listaTareas = await respuesta.json();
          setArregloTareas(listaTareas);
      } catch (error) {
          console.log(error);
      }
  }
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      const nuevaTarea = {
          tarea
      }
      try {
          const peticion = await fetch(URL,{
              method: 'POST',
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(nuevaTarea)
          })
          if(peticion.status === 201){
              console.log("se agrego la tarea correctamente")
          }
      } catch (error) {
          console.log(error);
      }
      recargarPagina();
  }
  const borrarTarea = async (id) => {
      try {
          const peticion = await fetch(URL+"/"+id,
          {
              method: "DELETE"
          }
          );
          if (peticion.status === 200) {
              console.log("La tarea se elimino correctamente")
          }
      } catch (error) {
          console.log(error);
      }
      recargarPagina();
  }

  const recargarPagina = () => {
      window.location.reload(true);
  }
  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 d-flex">
                <Form.Control 
                    type="text" 
                    placeholder="Ingrese una tarea" 
                    onChange={(e)=>setTarea(e.target.value.trimStart())} 
                    value={tarea}
                />
                <Button variant="primary" type="submit" className="ms-3">Enviar</Button>
            </Form.Group>
        </Form>
        <ListaTareas arregloTareas={arregloTareas} borrarTarea={borrarTarea}></ListaTareas> 
    </div>
);
};

export default Formulario;
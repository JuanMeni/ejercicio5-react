import React from 'react';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Formulario from './components/Formulario'

const App = () => {
    return (
        <div> 
            <section className='container my-5'>
                <Titulo/>
                <Subtitulo />
                <Formulario></Formulario>
            </section>
        </div>
    );
};

export default App;
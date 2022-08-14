import React from 'react';
import Formulario from './components/Formulario';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';

const App = () => {
    return (
        <div>
            <section className='container'>
            <Titulo></Titulo>
            <Subtitulo></Subtitulo>
            <Formulario></Formulario>
            </section>
        </div>
    );
};

export default App;
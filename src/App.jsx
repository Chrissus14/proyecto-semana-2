import React from 'react';
import Navbar from './components/Navbar';
import MainBlog from './components/MainBlog';
import CardSection from './components/CardSection';
import Footer from './components/Footer';
import Alert from './components/Alert';
import data from './data';

const App = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="container">
        <header>
          {/**Navegacion */}
          <Navbar />
        </header>

        <main>
          {/**Seccion de blog destacado */}
          <section>
            <MainBlog />
          </section>

          {/*
           *La seccion se renderiza si cumple con la condicion
           *Modificar en el archivo data.js la propiedad category
           *para provocar un error, ya que cada sección corresponde a una categoría en concreto
           */}
          <section className="mb-4">
            <h2 className="text-primary mb-3">Digital Marketing</h2>
            {/*
             *Si la posición indicada cumple la condición crear el component CardSection
             *si no renderiza el component Alert
             */}
            {data[0].category === 'Marketing' ? (
              <CardSection key={data[0].id} data={data[0]} />
            ) : (
              <Alert />
            )}
          </section>

          <hr />

          {/*La seccion se renderiza si cumple con la condicion */}
          <section className="mb-4">
            <h2 className="text-primary mb-3">Activación de Marca</h2>
            {/*
             *Si la posición indicada cumple la condición crear el component CardSection
             *si no renderiza el component Alert
             */}
            {data[1].category === 'activacion de marca' ? (
              <CardSection key={data[1].id} data={data[1]} />
            ) : (
              <Alert />
            )}
          </section>

          <hr />

          {/*La seccion se renderiza si cumple con la condicion */}
          <section className="mb-4">
            <h2 className="text-primary mb-3">Optimización de ventas</h2>
            {/*
             *Si la posición indicada cumple la condición crear el component CardSection
             *si no renderiza el component Alert
             */}
            {data[2].category === 'Optimización de ventas' ? (
              <CardSection key={data[2].id} data={data[2]} />
            ) : (
              <Alert />
            )}
          </section>
          {/* fin de las secciones de los articulos */}
        </main>

        {/** Footer */}
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default App;

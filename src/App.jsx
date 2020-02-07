import React from 'react';
import Navbar from './components/Navbar';
import MainBlog from './components/MainBlog';
import CardSection from './components/CardSection';
import Footer from './components/Footer';
import CardBlog from './components/CardBlog';
import Alert from './components/Alert';
import data from './data';

const App = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="container">
        <Navbar />
        <MainBlog />
        <section className="mb-4">
          <h2 className="text-primary mb-3">Digital Marketing</h2>
          {data[0].category === 'Marketing' ? (
            <CardSection key={data[0].id} data={data[0]} />
          ) : (
            <Alert />
          )}
        </section>

        <hr />

        <section className="mb-4">
          <h2 className="text-primary mb-3">Activación de Marca</h2>
          {data[1].category === 'activacion de marca' ? (
            <CardSection key={data[1].id} data={data[1]} />
          ) : (
            <Alert />
          )}
        </section>

        <hr />

        <section className="mb-4">
          <h2 className="text-primary mb-3">Optimización de ventas</h2>
          {data[2].category === 'Optimización de ventas' ? (
            <CardSection key={data[2].id} data={data[2]} />
          ) : (
            <Alert />
          )}
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default App;

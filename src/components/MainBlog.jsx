import React from 'react';

const MainBlog = () => {
  return (
    <div className="container-fluid px-0 my-3">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1580875320106-7b513cc8dd57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=891&q=80"
            alt="pan"
            // style={imgn}
            className="card-img-top"
          />
        </div>
        <div className="col-md-6 px-4">
          <p className="text-uppercase font-weight-bold text-primary">Lugares</p>
          <h2 className="h2 font-weight-bold">
            Las playas más hermosas de México para visitar en tus proximas vacaciones
          </h2>
          <p className="text-muted">El_viajero</p>
          <p className="text-muted">06/02/2020</p>
          <button className="btn btn-primary">Leer más</button>
        </div>
      </div>
    </div>
  );
};

export default MainBlog;

import React from 'react';

const Footer = () => {
  return (
    <div className="jumbotron">
      <h2 className="text-center">Suscribete a nuestro blog</h2>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Ingresa tu email" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" id="button-addon2">
            Suscribirse
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';

const imgn = {
  height: '200px',
  width: '100%'
};

const MainBlog = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 px-0">
          <img
            src="https://images.unsplash.com/photo-1580875320106-7b513cc8dd57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=891&q=80"
            alt="pan"
            style={imgn}
          />
        </div>
        <div className="col-md-6 pr-4">
          <h2>Titulo de la entrada de blog</h2>
          <p>06/02/2020</p>
          <button className="btn btn-primary">Leer más</button>
        </div>
      </div>
    </div>
  );
};

export default MainBlog;

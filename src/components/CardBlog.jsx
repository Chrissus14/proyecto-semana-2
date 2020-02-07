import React from 'react';

const CardBlog = () => {
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img
          src="https://images.unsplash.com/photo-1562887085-22edc4817a9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <span>Categoria</span>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </p>
          <p>02/02/2020</p>
        </div>
      </div>
    </>
  );
};

export default CardBlog;

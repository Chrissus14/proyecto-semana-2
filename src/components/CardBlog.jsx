import React from 'react';

const CardBlog = () => {
  return (
    <>
      <div class="card" style={{ width: '18rem' }}>
        <img
          src="https://images.unsplash.com/photo-1562887085-22edc4817a9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <span>Categoria</span>
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
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

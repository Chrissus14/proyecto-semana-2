import React from 'react';

const CardBlog = props => {
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img
          src="https://images.unsplash.com/photo-1558980394-34764db076b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          className="card-img-top"
          alt="imagen no encontrada"
        />
        <div className="card-body">
          <span className="font-weight-bold text-primary">{props.category}</span>
          <h5 className="card-title h5">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.author}</h6>
          <span className="card-text text-muted d-block">{props.content}</span>
          <span className="text-muted d-block">{props.date}</span>
        </div>
      </div>
    </>
  );
};

export default CardBlog;
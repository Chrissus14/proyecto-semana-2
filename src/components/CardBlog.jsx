import React from 'react';

const CardBlog = props => {
  return (
    <>
      <div className="card mb-4 mr-lg-5" style={{ width: '18rem' }}>
        <img src={props.imgUrl} className="card-img-top" alt="imagen no encontrada" />
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

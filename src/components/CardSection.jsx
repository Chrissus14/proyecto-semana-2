import React from 'react';
import CardBlog from './CardBlog';

const CardSection = () => {
  return (
    <>
      <h3 className="mb-3">Digital marketing</h3>
      <div className="d-md-flex flex-row">
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </div>
    </>
  );
};

export default CardSection;

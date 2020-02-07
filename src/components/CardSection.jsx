import React from 'react';
import CardBlog from './CardBlog';

const CardSection = props => {
  return (
    <>
      <h3 className="text-primary">Digital marketing</h3>
      <div className="d-md-flex flex-row justify-content-between">
        <CardBlog />
      </div>
    </>
  );
};

export default CardSection;

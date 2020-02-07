import React from 'react';
import CardBlog from './CardBlog';

const CardSection = ({ data }) => {
  return (
    <>
      <div className="d-md-flex flex-row">
        {data.articles.map(item => (
          <CardBlog
            key={item.id}
            category={item.category}
            author={item.author}
            content={item.content}
            date={item.date}
          />
        ))}
      </div>
    </>
  );
};

export default CardSection;

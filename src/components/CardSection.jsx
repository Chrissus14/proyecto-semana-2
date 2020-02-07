import React from 'react';
import CardBlog from './CardBlog';

const CardSection = ({ data }) => {
  return (
    <>
      <div className="d-md-flex flex-row">
        {/**
         * Recorre los datos recibidos a travez de propiedades
         * y renderiza el componente CardBlog por cada elemento que
         * haya cumplido con la condición
         */}
        {data.articles.map(item => (
          <CardBlog
            key={item.id}
            title={item.title}
            category={item.category}
            author={item.author}
            content={item.content}
            date={item.date}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
    </>
  );
};

export default CardSection;

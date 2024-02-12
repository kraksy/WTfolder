import React from 'react';

const Card = ({ title, imageUrl, number }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-number">{number}</p>
      </div>
    </div>
  );
};

export default Card;
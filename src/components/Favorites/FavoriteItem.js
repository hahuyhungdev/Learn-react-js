import React from 'react';

import Card from '../UI/Card';
import './FavoriteItem.css';

const FavoriteItem = ({prod}) => {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="favorite-item">
        <h2>{prod.title}</h2>
        <p>{prod.description}</p>
      </div>
    </Card>
  );
};

export default FavoriteItem;

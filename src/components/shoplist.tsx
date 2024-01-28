import React, { useState } from 'react';

interface ShopListProps {
      name: string;
      quantity: number;
}

export const ShopList: React.FC<ShopListProps> = ({ name, quantity }) => {
      const [productCount] = useState(quantity);
      const [isDone, setIsDone] = useState(false);

      const handleDoneClick = () => {
            setIsDone(true);
      };
      const handleRemoveClick = () => {
            setIsDone(true);
      };

      return (
            <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                  <p style={{ width: '50%', border: '1px solid gray' }}>{name}</p>
                  <p style={{ width: '90%', border: '1px solid gray' }}>{productCount}</p>
                  <p>ks</p>
                  <button
                        style={{
                              backgroundColor: isDone ? 'gray' : 'green',
                              fontSize: '12px',
                              height: '40px',
                              width: '170px',
                        }}
                        onClick={handleDoneClick}
                        disabled={isDone}
                  >
                        {isDone ? 'Done' : 'Mark as Done'}
                  </button>
                  <button
                        style={{ backgroundColor: 'red', fontSize: '12px', height: '40px', width: '170px' }}
                        onClick={handleRemoveClick}
                  >
                        remove
                  </button>
            </div>
      );
};
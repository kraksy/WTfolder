import React, { useState } from 'react';

interface ShopListProps {
      name: string;
      quantity: number;
}

export const ShopList: React.FC<ShopListProps> = ({ name, quantity }) => {
      const [productCount] = useState(quantity);

      return (
            <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                  <p style={{ width: '50%', border: '1px solid gray' }}>{name}</p>
                  <p style={{ width: '90%', border: '1px solid gray' }}>{productCount}</p>
                  <p>ks</p>
                  <button style={{ backgroundColor: 'green', fontSize: '12px', height: '40px', width: '170px' }}>done</button>
                  <button style={{ backgroundColor: 'red', fontSize: '12px', height: '40px', width: '170px' }}>remove</button>
            </div>
      );
} // Add this closing curly brace

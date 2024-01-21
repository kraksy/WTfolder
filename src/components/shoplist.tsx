import React, { useState } from 'react';

interface ShopListProps {
      name: string;
      quantity: number;
}

export const ShopList: React.FC<ShopListProps> = ({ name, quantity }) => {
      const [productCount] = useState(quantity);

      return (
            <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                  <p style={{ width: '40%' }}>{name}</p>
                  <p style={{ width: '50px' }}>{productCount}</p>
                  <p>ks</p>
                  <button style={{ backgroundColor: 'green', fontSize: '12px', height: '40px' }}>Button 1</button>
                  <button style={{ backgroundColor: 'red', fontSize: '12px', height: '40px' }}>Button 2</button>
            </div>
      );
      } // Add this closing curly brace

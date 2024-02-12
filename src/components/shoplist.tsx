import React from 'react';

interface ShopListProps {
      name: string;
}

export const ShopList: React.FC<ShopListProps> = ({ name}) => {
      return (
            <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                  <p style={{ width: '50%', border: '1px solid gray' }}>{name}</p>
                  <p>ks</p>
                  <button style={{ backgroundColor: 'green', fontSize: '12px', height: '40px', width: '170px' }}>done</button>
                  <button style={{ backgroundColor: 'red', fontSize: '12px', height: '40px', width: '170px' }}>remove</button>
            </div>
      );
}

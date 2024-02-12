import React from 'react';

const ButtonRow: React.FC = () => {

      return (
            <div style={{ display: 'flex', gap: '10px' }}>
                  <button style={{ backgroundColor: 'blue' }}>add user</button>
                  <button style={{ backgroundColor: 'green' }}>mark as done</button>
                  <button style={{ backgroundColor: 'yellow' }}>archive</button>
                  <button style={{ backgroundColor: 'red' }}>remove</button>
            </div>
      );
};

export default ButtonRow;

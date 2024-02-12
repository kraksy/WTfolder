import React, { useState } from 'react';
import getUsers from './users'; // Import getUsers function from users.tsx

const ButtonRow: React.FC = () => {
      return (
            <div style={{ display: 'flex', gap: '10px' }}>
                  <button style={{ backgroundColor: 'blue' }} onClick={handleAddUser}>
                        add user
                  </button>
                  <button style={{ backgroundColor: 'blue' }} onClick={handleShowUsers}>
                        show user
                  </button>
                  <button style={{ backgroundColor: 'green' }} onClick={handleMarkAsDone}>
                        mark as done
                  </button>
                  <button style={{ backgroundColor: 'yellow' }} onClick={handleArchive}>
                        archive
                  </button>
                  <button style={{ backgroundColor: 'red' }} onClick={handleRemove}>
                        remove
                  </button>
            </div>
      );
};

export default ButtonRow;

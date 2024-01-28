import React, { useState } from 'react';
import getUsers from './users'; // Import getUsers function from users.tsx

const ButtonRow: React.FC = () => {
      const [isArchived, setIsArchived] = useState(false);
      const [userCount, setUserCount] = useState(0);

      const handleAddUser = () => {
            // Add user logic here
            console.log('Add user clicked');
            setUserCount(userCount + 1);
      };

      const handleMarkAsDone = () => {
            // Mark as done logic here
            console.log('Mark as done clicked');
      };

      const handleArchive = () => {
            // Archive logic here
            setIsArchived(true);
            console.log('Archive clicked');
      };

      const handleRemove = () => {
            // Remove logic here
            console.log('Remove clicked');
      };

      const handleShowUsers = () => {
            // Call getUsers function and display users in the console
      };

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

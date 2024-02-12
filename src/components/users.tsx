import React, { useState } from 'react';

interface User {
      id: number;
      name: string;
}

interface ModalProps {
      users: User[];
      onClose: () => void;
}

const getUsers = (): User[] => {
      // Replace this with your actual implementation to fetch users from an API or database
      const users: User[] = [
            { id: 1, name: "John" },
            { id: 2, name: "Jane" },
            { id: 3, name: "Bob" },
      ];
      return users;
};


const Modal: React.FC<ModalProps> = ({ onClose }) => {
      const [editedUsers, setEditedUsers] = useState(getUsers());

      const handleNameChange = (id: number, newName: string) => {
            setEditedUsers(prevUsers =>
                  prevUsers.map(user => (user.id === id ? { ...user, name: newName } : user))
            );
      };

      const handleRemoveUser = (id: number) => {
            setEditedUsers(prevUsers => prevUsers.filter(user => user.id !== id));
      };

      return (
            <div className="modal">
                  <div className="modal-content">
                        <h2>Users</h2>
                        <ul>
                              {editedUsers.map(user => (
                                    <li key={user.id}>
                                          <input
                                                type="text"
                                                value={user.name}
                                                onChange={e => handleNameChange(user.id, e.target.value)}
                                          />
                                          <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
                                    </li>
                              ))}
                        </ul>
                        <button onClick={onClose}>Close</button>
                  </div>
            </div>
      );
};

export default Modal;

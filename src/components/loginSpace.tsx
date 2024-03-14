import React, { useState } from 'react';

const LoginSpace: React.FC = () => {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');

      const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(event.target.value);
      };

      const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
      };

      const handleLogin = () => {
            // Perform login logic here
            console.log('Username:', username);
            console.log('Password:', password);
      };

      return (
            <div>
                  <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
                  <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
                  <button onClick={handleLogin}>Login</button>
            </div>
      );
};

export default LoginSpace;
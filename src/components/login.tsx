import React, { useState } from 'react';

const Login = ({ onLogin }: { onLogin: (username: string) => void }) => {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');

      const handleLogin = () => {
            // You can implement your authentication logic here, for simplicity let's just check if username and password are not empty
            if (username.trim() !== '' && password.trim() !== '') {
                  onLogin(username);
            } else {
                  alert('Please enter username and password.');
            }
      };

      return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                  <div style={{ textAlign: 'center' }}>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={handleLogin}>Login</button>
                  </div>
            </div>
      );
};

export default Login;
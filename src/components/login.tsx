import React, { useState } from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Login: React.FC = () => {
      const [Email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleLogin = async () => {
            await createUserWithEmailAndPassword(auth, Email, password);
            console.log('Username:', Email);
            console.log('Password:', password);
      };

      return (
            <div>
                  <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                  <input onChange={(e) => setEmail(e.target.value)} placeholder="Password" />
                  <button onClick={handleLogin}>sign In</button>
            </div>
      );
};

export default Login;
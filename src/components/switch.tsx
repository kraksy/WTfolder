import React, { useState } from 'react';

const Switch = () => {
      const [isLightMode, setIsLightMode] = useState(true);

      const handleSwitch = () => {
            setIsLightMode(!isLightMode);
      };

      return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                  <button onClick={handleSwitch}>
                        {isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                  </button>
                  <p>Current mode: {isLightMode ? 'Light Mode' : 'Dark Mode'}</p>
            </div>
      );
};

export default Switch;

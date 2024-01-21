import React, { useState } from 'react';

const Switch = () => {
      const [isLightMode, setIsLightMode] = useState(true);

      const handleSwitch = () => {
            setIsLightMode(!isLightMode);
      };

      return (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                        style={{
                              backgroundColor: isLightMode ? 'green' : 'transparent',
                              border: 'none',
                              borderRadius: '5px',
                              padding: '5px 10px',
                              color: isLightMode ? 'white' : 'black',
                        }}
                        onClick={handleSwitch}
                  >
                        {isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                  </button>
                  <p>Current mode: {isLightMode ? 'Light Mode' : 'Dark Mode'}</p>
            </div>
      );
};

export default Switch;

import React from 'react';

import Card from './components/Card';
import Flags from './components/flags'
import Switch from './components/switch'

const Overview = () => {
      return (
            <div>
                  <div className='header' style={{ backgroundColor: 'transparent' }}>
                        <Flags />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                              <Switch />
                        </div>
                  </div>

                  <h1>Overview</h1>

                  <div>
                        <button className='blueButton' style={{ marginBottom: '10px' }}> open all </button>
                        <button className='greenButton' style={{ marginBottom: '10px' }}> add new </button>
                  </div>

                  <div className='cards'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                  </div>
            </div>
      );
};

export default Overview;

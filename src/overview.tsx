import React from 'react';
import Flags from './components/flags'
import Switch from './components/switch'
import { Card, Button } from 'antd';

const OverviewPage: React.FC = () => {
      return (
            <div>
                  <div className='header'>
                        <Flags />
                        <Switch />
                  </div>
                  <header style={{ backgroundColor: 'transparent' }}>
                        <h1>Title</h1>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                              <Button>Button 1</Button>
                              <Button>Button 2</Button>
                        </div>
                  </header>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Card title="Card 1" style={{ width: 300, margin: '10px' }}>
                              <p>Card content</p>
                              <Button>Button</Button>
                        </Card>
                        <Card title="Card 2" style={{ width: 300, margin: '10px' }}>
                              <p>Card content</p>
                              <Button>Button</Button>
                        </Card>
                        <Card title="Card 3" style={{ width: 300, margin: '10px' }}>
                              <p>Card content</p>
                              <Button>Button</Button>
                        </Card>
                        <Card title="Card 4" style={{ width: 300, margin: '10px' }}>
                              <p>Card content</p>
                              <Button>Button</Button>
                        </Card>
                  </div>
                  <Flags/>
                  <Switch/>
            </div>
      );
};

export default OverviewPage;

import React from 'react';
import styled from 'styled-components';
import Planet from './planet';

const ParentComponent: React.FC = () => {

      const Shell = styled.div`
            background-color: transparent;
            border-radius: 8px;
            padding: 16px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
      `;

      const PlanetContainer = styled.div`
            flex: 0 0 33.33%;
            padding: 8px;
      `;

      return (
            <div>
                  <Shell>
                        <PlanetContainer>
                              <Planet name="Earth" diameter={12756} color="blue" imageSource='public\earth.jpg' />
                        </PlanetContainer>
                        <PlanetContainer>
                              <Planet name="Mars" diameter={6792} color="red" imageSource='public\mars.jpg' />
                        </PlanetContainer>
                        <PlanetContainer>
                              <Planet name="Jupiter" diameter={142984} color="orange" imageSource='public\Jupiter.jpg' />     
                        </PlanetContainer>
                  </Shell>
            </div>
      );
};

export default ParentComponent;
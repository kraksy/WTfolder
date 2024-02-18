import styled from 'styled-components';
import PlanetDetails from './planetdetails';
import React, { useEffect } from 'react';

interface PlanetProps {
      name: string;
      diameter: number;
      color: string;
      imageSource: string;
}

const Planet: React.FC<PlanetProps> = ({ name, diameter, color, imageSource }) => {
      const [collapsed, setCollapsed] = React.useState(true);
      const [isLoading, setIsLoading] = React.useState(false);

      useEffect(() => {
            if (isLoading) {
                  setTimeout(() => {
                        setIsLoading(false);
                  }, 2000);
            }
      }, [isLoading]);
      const handleCollapse = () => {
            setTimeout(() => {
                  setCollapsed(!collapsed);
            }, 1000);
      };

      useEffect(() => {
            if (isLoading) {
                  setTimeout(() => {
                        setIsLoading(false);
                  }, 2000);
            }
      }, [isLoading]);

      const handleClick = () => {
            setIsLoading(true);
            handleCollapse();
      };

      const PlanetCard = styled.div`
            background-color: transparent;
            border-radius: 8px;
            padding: 16px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            cursor: pointer;
      `;

      return (
            <StyledPlanet onClick={handleClick}>
                  <PlanetCard>
                        <h2>{name}</h2>
                  </PlanetCard>
                  {!collapsed && (
                        <>    
                              <PlanetCard>
                                    <img src={imageSource} alt="Planet Image" style={{ width: '200px', height: '200px' }} />
                                    <p>Diameter: {diameter} km</p>
                                    <p>Color: {color}</p>
                                    <PlanetDetails description="This is a planet in our solar system." />
                              </PlanetCard>
                        </>
                  )}
                  {isLoading && <PlanetCard>Loading... </PlanetCard>}
            </StyledPlanet>
      );
};

const StyledPlanet = styled.div`
      background-color: transparent;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      cursor: pointer;
`;

export default Planet;
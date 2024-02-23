import React from 'react';

const PlanetDetails = ({ description }: { description: string }) => {
      return (
            <div>
                  <p>{description}</p>
            </div>
      );
};

export default PlanetDetails;
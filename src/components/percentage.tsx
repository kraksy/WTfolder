import React, { useEffect, useState } from 'react';
import Value from './value';

const Percentage: React.FC<{ value: number }> = ({ value }) => {
      const [percentage, setPercentage] = useState<number>(0);

      const calculatePercentage = () => {
            const calculatedPercentage = (value / 100) * 100;
            setPercentage(calculatedPercentage);
      };

      // Call the calculatePercentage function when the component mounts
      useEffect(() => {
            calculatePercentage();
      }, []);

      return (
            <div>
                  <Value value={percentage} />
            </div>
      );
};

export default Percentage;
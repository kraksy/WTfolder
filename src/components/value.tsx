import React, { useState } from 'react';
import Graph from './graph';
import Percentage from './percentage';

const ValueComponent: React.FC = () => {
      const [value, setValue] = useState<number>(0);

      const addValue = (amount: number) => {
            setValue(prevValue => prevValue + amount);
      };

      const subtractValue = (amount: number) => {
            setValue(prevValue => prevValue - amount);
      }

      return (
            <div>
                  <p>Value: {value}</p>

                  <button onClick={() => addValue(1)}>Add 1</button>
                  <button onClick={() => subtractValue(1)}>Subtract 1</button>

                  <Graph value={value} /> 
                  <Percentage value={value} />
            </div>
      );
};

export default ValueComponent;
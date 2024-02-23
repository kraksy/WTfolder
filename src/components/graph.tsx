import React, { useEffect, useRef } from 'react';

const Graph = ({ value }: { value: any }) => {
      const canvasRef = useRef(null);

      useEffect(() => {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');

            const drawGraph = () => {
                  const { width, height } = canvas;
                  const x = width / 2;
                  const y = value >= 0 ? height - value : height + value;

                  context.clearRect(0, 0, width, height);
                  context.beginPath();
                  context.moveTo(x, height);
                  context.lineTo(x, y);
                  context.strokeStyle = value >= 0 ? 'blue' : 'red';
                  context.lineWidth = 40; // Increase line width to make it thicker
                  context.stroke();
            };

            drawGraph();
      }, [value]);

      return <canvas ref={canvasRef} />;
};

export default Graph;
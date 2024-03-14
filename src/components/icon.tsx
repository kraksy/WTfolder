import React from 'react';

type IconProps = {
      src: string;
};

const Icon: React.FC<IconProps> = ({ src }) => {
      return <img src={src} alt="Icon" />;
};

export default Icon;
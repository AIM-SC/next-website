import React from 'react';
import Title from './Title';

interface BoxProps {
  img: string;
  title: string;
  subtitle: string;
  description: string;
}

const Box: React.FC<BoxProps> = ({ img, title, subtitle, description }) => {
  return (
    <div className="bg-white w-full rounded-md">
      <img src={img} alt="AIMの説明画像" className="w-full h-auto mb-4 rounded-md" />
      <div className='p-3'>
        <Title 
          maintitle={title}
          subtitle={subtitle}
        />
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Box;

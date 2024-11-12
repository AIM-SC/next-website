import React from 'react';

interface titleProps {
  maintitle: string;
  subtitle: string;
}

const Title: React.FC<titleProps> = ({  maintitle, subtitle }) => {
  return (
    <div className="bg-white w-full rounded-md">
      <div className='p-3'>
        <h2 className="text-lg font-bold mb-2">{maintitle}</h2>
        <h3 className="text-m text-[#d9ae4c] mb-2">{subtitle}</h3>
      </div>
    </div>
  );
};

export default Title;

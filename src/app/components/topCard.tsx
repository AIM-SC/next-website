import React from 'react';

interface TopCardProps {
  title: string;
  notes: string;
  subtitle: string;
  content: Array<{ name: string; time: string }>;
  button?: string; 
}

const TopCard: React.FC<TopCardProps> = ({ title, notes, subtitle, content, button }) => {
  return (
    <div className="bg-white rounded-lg p-6 mb-4">
      <div className="border-b pb-2 mb-4">
        <div className='justify-content flex'>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-gray-400">{notes}</p>
        </div>
        <p className="text-sm text-[#d9ae4c]">{subtitle}</p>
      </div>
      <div className="flex flex-col space-y-2">
        {content.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between">
              <span className="text-gray-800">{item.name}</span>
              <span className="text-[#d9ae4c]">{item.time}</span>
            </div>
            <hr className="border-0 border-t border-dashed border-gray-400 my-2" />
          </div>
        ))}
      </div>
      {button && (
        <div className="mt-4">
          <button className="text-[#d9ae4c] hover:underline">{button}</button>
        </div>
      )}
    </div>
  );
};

export default TopCard;

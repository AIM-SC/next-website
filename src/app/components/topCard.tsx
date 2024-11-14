type Props = {
  title: string;
  notes: string;
  subtitle: string;
  content: Array<{ name: string; time: string }>;
  button?: string; 
};

const TopCard = ({ title, notes, subtitle, content, button }: Props) => {
  return (
    <div className="mb-4 rounded-lg bg-white p-6">
      <div className="mb-4 border-b pb-2">
        <div className='justify-content flex'>
            <h2 className="font-semibold text-lg">{title}</h2>
            <p className="text-gray-400 text-sm">{notes}</p>
        </div>
        <p className="text-[#d9ae4c] text-sm">{subtitle}</p>
      </div>
      <div className="flex flex-col space-y-2">
        {content.map((item) => (
          <div key={item.name}> {}
            <div className="flex flex-col justify-between md:flex-row">
              <span className="text-gray-800">{item.name}</span>
              <span className="text-[#d9ae4c]">{item.time}</span>
            </div>
            <hr className="my-2 border-0 border-gray-400 border-t border-dashed" />
          </div>
        ))}
      </div>
      {button && (
        <div className="mt-4">
          <button type="button" className="text-[#d9ae4c] hover:underline">{button}</button>
        </div>
      )}
    </div>
  );
};

export default TopCard;

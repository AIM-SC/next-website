type Props = {
  maintitle: string;
  subtitle: string;
};

const Title = ({ maintitle, subtitle }: Props) => {
  return (
    <div className="w-full rounded-md bg-white">
      <div className='p-3'>
        <h2 className="mb-2 font-bold text-lg">{maintitle}</h2>
        <h3 className="mb-2 text-[#d9ae4c] text-m">{subtitle}</h3>
      </div>
    </div>
  );
};

export default Title;

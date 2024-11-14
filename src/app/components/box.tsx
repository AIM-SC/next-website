import Title from './title';

type Props = {
  img: string;
  title: string;
  subtitle: string;
  description: string;
};

const Box = ({ img, title, subtitle, description }: Props) => {
  return (
    <div className="w-full rounded-md bg-white">
      <img src={img} alt="AIMの説明画像" className="mb-4 h-auto w-full rounded-md" />
      <div className='p-3'>
        <Title 
          maintitle={title}
          subtitle={subtitle}
        />
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Box;

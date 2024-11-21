import Title from './title';
import Link from "next/link";
import Image from "next/image"; 

type Props = {
  img: string;
  title: string;
  subtitle: string;
  description: string;
};

const Box = ({ img, title, subtitle, description }: Props) => {
  return (
    <div className="w-full rounded-md bg-white">
      <Image 
        src={img} 
        alt="AIMの説明画像" 
        className="mb-4 h-auto w-full rounded-md" 
        width={500} 
        height={300} 
        layout="responsive" 
        objectFit="cover"  
      />
      <div className='p-3'>
        <Title 
          maintitle={title}
          subtitle={subtitle}
        />
        <Link href={`/${subtitle}`} className="text-gray-600 text-sm">{description}</Link>
      </div>
    </div>
  );
};

export default Box;

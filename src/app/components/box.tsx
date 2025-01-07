import Title from './title';
import Link from "next/link";
import Image from "next/image"; 

type Props = {
  src: string;
  title: string;
  subtitle: string;
  description: string;
};

const Box = ({ src, title, subtitle, description }: Props) => {
  return (
    <div className="w-full rounded-md bg-white">
      <Image 
        src={src} 
        alt="AIMの説明画像" 
        className="mb-4 rounded-md" 
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

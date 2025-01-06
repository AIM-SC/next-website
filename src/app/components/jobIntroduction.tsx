import Image from "next/image";

type Props = {
  image: string;
  alt: string;
  title: string;
  text: string;
};

const JobIntroduction = ({ image, alt, title, text }: Props) => {
  return (
    <div className="flex flex-col bg-white rounded-md p-4 mx-[8%] my-[8%]">
      {/* 画像の表示 */}
      <div className="w-full mb-4">
        <Image 
          src={image} 
          alt={alt} 
          layout="intrinsic" 
          width={640}       
          height={360}      
          className="rounded-md"
        />
      </div>
      {/* テキストエリア */}
      <div className="text-left">
        <div className="text-xl font-bold mb-2">{title}</div>
        <div className="text-sm" dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>
    </div>
  );
};

export default JobIntroduction;



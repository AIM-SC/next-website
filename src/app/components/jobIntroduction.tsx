import Image from "next/image";


type Props = {
  image: string;
  alt: string;
  title: string;
  text: React.ReactNode;
};

const JobIntroduction = ({ image, alt, title, text }: Props) => {
  return (
    <div className="mx-[8%] my-[8%] flex flex-col rounded-md bg-white p-4">
      {/* 画像の表示 */}
      <div className="mb-4 w-full">
        <Image 
          src={image} 
          alt={alt} 
          width={640}       
          height={360}      
          className="rounded-md"
        />
      </div>
      {/* テキストエリア */}
      <div className="text-left">
        <div className="mb-2 font-bold text-xl">{title}</div>
        <div className="text-sm">{text}</div>
      </div>
    </div>
  );
};

export default JobIntroduction;



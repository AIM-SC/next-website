import Title from "./title";
import Link from "next/link";
import Image from "next/image";

type Props = {
  src: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
};

const Box = ({ src, title, subtitle, description, link }: Props) => {
	const isIcon = src.endsWith(".svg");
  
	return (
	  <div className="w-full rounded-md bg-white shadow-lg">
		  <Link href={link} className="flex flex-col items-center p-4">
			  <Image
				  src={src}
				  alt="AIMの説明画像"
				  className={`mb-4 rounded-md ${isIcon ? "mx-auto h-10 w-10" : ""}`}  
				  width={isIcon ? 200 : 400} 
				  height={isIcon ? 200 : 300}
				  layout={isIcon ? "intrinsic" : "responsive"}
				  objectFit={isIcon ? "contain" : "cover"}
			  />
			  <div className="text-center">
				  <Title maintitle={title} subtitle={subtitle} />
				  <p>{description}</p>
			  </div>
		  </Link>
	  </div>
	);
  };
  

export default Box;

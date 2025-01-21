import Image from "next/image";

type Props = {
	image: string;
	title: string;
	text: React.ReactNode;
};

const JobIntroduction = ({ image, title, text }: Props) => {
	return (
		<div className="mx-[8%] my-[8%] flex flex-col rounded-md bg-white p-4">
			{/* 画像の表示 */}
			<div className="relative mb-4 aspect-[16/9] w-full">
				<Image
					src={image}
					alt={title}
					fill
					className="rounded-md object-cover"
				/>
			</div>
			{/* テキストエリア */}
			<div className="text-left">
				<div className="mb-2 font-bold text-xl">{title}</div>
				<div className="text-base">{text}</div>
			</div>
		</div>
	);
};

export default JobIntroduction;

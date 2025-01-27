import Image from "next/image";

type Props = {
	image: string;
	text: string;
	note?: string;
};

const Rule = ({ image, text, note }: Props) => {
	return (
		<div className="mb-4 flex flex-col items-center bg-white p-2 sm:p-6">
			<div className="relative aspect-[1/1] w-[50%]">
				<Image src={image} alt="禁止" fill />
			</div>
			<div className="mt-10 text-lg leading-5">{text}</div>
			<div className="mt-3 text-[#8C8C8C] text-base leading-5">{note}</div>
		</div>
	);
};

export default Rule;

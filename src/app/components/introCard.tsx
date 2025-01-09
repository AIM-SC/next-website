import { useState } from "react";
import Image from "next/image";

type Props = {
	image: string;
	alt: string;
	title: string;
	text: React.ReactNode;
	exsampleText?: React.ReactNode;
};

const introCard = ({ image, alt, title, text, exsampleText }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleContent = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="mx-[8%] my-[8%] flex flex-col items-start bg-white p-4">
			{/* 画像の表示 */}
			<div className="mb-4 w-full">
				<Image src={image} alt={alt} width={640} height={360} />
			</div>

			{/* タイトルエリア */}
			<div className="flex w-full items-center justify-between sm:block">
				<div className="font-bold text-xl">{title}</div>
				<button
					type="button"
					onClick={toggleContent}
					className="block font-bold text-gray-500 text-xl focus:outline-none sm:hidden"
				>
					{isOpen ? "−" : "+"}
				</button>
			</div>

			{/* コンテンツエリア */}
			<div className={`pb-3 text-left ${isOpen ? "block" : "hidden"} sm:block`}>
				<div className="text-base">
					{text && <div className="space-y-4">{text}</div>}
				</div>
				{exsampleText && (
					<>
						<span className="bg-[#F0EBDC] px-2 py-2 text-base">
							例えばこんな使い方
						</span>
						<div className="text-base">{exsampleText}</div>
					</>
				)}
			</div>
		</div>
	);
};

export default introCard;

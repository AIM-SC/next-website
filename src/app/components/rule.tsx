type Props = {
	image: string;
	text: string;
	note?: string;
};

const Rule = ({ image, text, note }: Props) => {
	return (
		<div className="mb-4 flex flex-col items-center rounded-lg bg-white p-2 sm:p-6">
			<img className="w-4/5" src={image} alt="" />
			<p className="leading-5">{text}</p>
			<p className="mt-3 text-[#8C8C8C] leading-5">{note}</p>
		</div>
	);
};

export default Rule;

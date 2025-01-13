import Link from "next/link";
import Image from "next/image";

type Props = {
	image: string;
	title: string;
	subtitle: string;
	link: string;
	time: string[];
	notes: React.ReactNode;
};

const Explain = ({ image, title, subtitle, link, time, notes }: Props) => {
	return (
		<div className="mb-4 rounded-lg bg-white p-6">
			<Image
				src={image}
				alt="詳細画像"
				width={500}
				height={333}
				className="rounded-md"
			/>
			<div className="m-2 text-left">
				<h2 className="mt-4 font-bold text-xl">{title}</h2>
				<h3>{subtitle}</h3>
				<div className="p-3">
					<Link
						href={link}
						target="_blank"
						className="rounded-lg bg-[#F0EBDC] p-3 underline hover:opacity-70"
					>
						利用案内はこちら
					</Link>

					<ul className="list-none">
						{time.map((time) => (
							<li key={time}>{time}</li>
						))}
					</ul>
				</div>

				{notes}
			</div>
		</div>
	);
};

export default Explain;

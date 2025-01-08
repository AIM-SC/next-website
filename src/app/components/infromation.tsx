import Title from "./title";
import Link from "next/link";

type Props = {
	title: string;
	notes: string;
	subtitle: string;
	content: Array<{ name: string; time: string }>;
};

const Information = ({ title, notes, subtitle, content }: Props) => {
	return (
		<div className="mb-4 rounded-lg bg-white p-6">
			<div className="mb-4 border-b text-center">
				<Title maintitle={title} subtitle={subtitle} notes={notes} />
			</div>
			<div className="flex flex-col space-y-2 text-center">
				{content.map((item) => (
					<div key={item.name}>
						<div className="flex flex-col justify-between transition-opacity hover:opacity-50 md:flex-row">
							<span className="text-gray-800 ">{item.name}</span>
							<span className="">{item.time}</span>
						</div>
						<hr className="my-2 border-0 border-gray-400 border-t border-dashed" />
					</div>
				))}
				<Link href="/blog/1" className="transition-opacity hover:opacity-50">
					一覧を見る
				</Link>
			</div>
		</div>
	);
};

export default Information;

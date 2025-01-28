type Props = {
	maintitle: string;
	subtitle: string;
	notes?: string;
};

const Title = ({ maintitle, subtitle, notes }: Props) => {
	return (
		<div className="w-full rounded-md bg-white">
			<div className="p-3">
				<div
					className={`flex items-end justify-center ${notes ? "space-x-4" : ""}`}
				>
					<h2 className="font-bold text-lg">{maintitle}</h2>
					{notes && <p className="text-gray-400 text-sm">{notes}</p>}
				</div>
				<h3 className="mb-2 text-[#d9ae4c] text-m w-auto">{subtitle}</h3>
			</div>
		</div>
	);
};

export default Title;

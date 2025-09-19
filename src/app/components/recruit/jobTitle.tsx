export default function JobTitle({
	title,
	discription,
}: { title: string; discription: React.ReactNode }) {
	return (
		<div className="flex flex-col gap-2">
			<p className="font-bold text-xl">{title}</p>
			<p className="text-base text-gray-600">{discription}</p>
		</div>
	);
}

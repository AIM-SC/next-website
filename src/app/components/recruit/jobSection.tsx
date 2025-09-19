export default function JobSection({
	contents,
}: { contents: React.ReactNode }) {
	return (
		<div className="!py-0 p-8 sm:px-[20%] md:p-8 lg:px-[8%] xl:px-8 2xl:px-[4%]">
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
				{contents}
			</div>
		</div>
	);
}

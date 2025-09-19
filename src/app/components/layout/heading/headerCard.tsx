import Image from "next/image";

export default function HeaderCard({
	title,
	engTitle,
	content,
}: { title: React.ReactNode; engTitle: string; content: React.ReactNode }) {
	return (
		<div className="my-8 flex flex-col-reverse items-center justify-center gap-4 rounded-lg bg-white p-8 sm:p-12 lg:px-24 xl:flex-row xl:px-12">
			<div className="w-full xl:w-1/2">
				<Image
					src="/images/general/about.webp"
					alt="AIMの説明画像"
					className="h-auto w-full rounded-md"
					width={500}
					height={300}
					layout="responsive"
					objectFit="cover"
				/>
			</div>
			<div className="w-full xl:ml-4 xl:w-1/2">
				<div className="font-bold text-lg md:text-[26px]">
					<h1 className="mb-2 leading-7 md:leading-9">{title}</h1>
					<div className="my-2 text-[#d9ae4c] text-sm">{engTitle}</div>
				</div>

				<div className="space-y-4 leading-loose">{content}</div>
			</div>
		</div>
	);
}

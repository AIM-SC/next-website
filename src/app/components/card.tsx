import type { ArticleType } from "@/types/microcms";
import { format } from "date-fns";
import Image from "next/image";
import Tag from "./tag";

export default function Card({ content }: { content: ArticleType }) {
	return (
		<div className="relative mx-auto w-full max-w-[360px] flex-shrink-0 rounded-xl bg-[#F6F3EA] p-5 shadow hover:opacity-70">
			<div className="relative aspect-[16/9] w-full">
				<Image
					src={content.thumbnail.url}
					className="rounded-md object-cover"
					alt={`News Image ${content.id}`}
					fill
				/>
			</div>
			<div className="pt-4">
				<h1 className="mb-2 line-clamp-2 h-[3rem] font-semibold text-[1rem] leading-6 md:text-[1.3rem]">
					{content.title}
				</h1>
				<div className="mb-2 font-semibold text-gray-600 text-sm">
					{format(
						new Date(content.publishedAt || content.updatedAt),
						"yyyy.MM.dd",
					)}
				</div>
				<div className="line-clamp-1">
					<Tag tags={content.tags} variant="card" />
				</div>
			</div>
		</div>
	);
}

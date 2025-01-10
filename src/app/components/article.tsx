import type { ArticleType } from "@/types/microcms";
import { format } from "date-fns";
import parse from "html-react-parser";
import Tag from "./tag";

export default function Article({ content }: { content: ArticleType }) {
	return (
		<div className="container mx-auto min-h-[60vh] rounded-xl bg-white py-[8%]">
			<div className="mx-[8%]">
				<h1 className="mb-4 font-bold text-2xl lg:text-3xl">{content.title}</h1>
				<div className="mb-2 flex justify-between">
					<Tag tags={content.tags} variant="article" />
					<h2 className="text-right font-semibold text-gray-600">
						{format(content.createdAt, "yyyy.MM.dd")}
					</h2>
				</div>
				<hr className="mb-[5%] border-gray-600" />
			</div>
			<div className="prose mx-auto">{parse(content.body)}</div>
		</div>
	);
}

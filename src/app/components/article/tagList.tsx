import type { TagType } from "@/types/microcms";
import Tag from "./tag";

export default function Taglist({ tagContents }: { tagContents: TagType[] }) {
	return (
		<div className="mt-8 flex flex-col gap-2">
			<hr className="border-[#d9ae4c] border-[1px]" />
			<div className="mt-2 ml-2 font-bold text-lg">タグから探す</div>
			<div className="mt-2 ml-4">
				<Tag tags={tagContents} variant="card" />
			</div>
		</div>
	);
}

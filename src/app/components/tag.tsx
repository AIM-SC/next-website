import type { TagType } from "@/types/microcms";
import Link from "next/link";

export default function Tag({
	tags,
	variant,
}: {
	tags: TagType[];
	variant: "card" | "article";
}) {
	const tagClass =
		variant === "card"
			? "p-1 px-3 rounded-full h-fit w-fit bg-[#d9ae4c] shadow-sm cursor-pointer font-bold"
			: "p-1 px-3 rounded-full h-fit w-fit bg-[#d9ae4c] text-sm shadow-sm cursor-pointer font-bold";

	return (
		<div className="flex h-6 flex-wrap gap-2 text-white text-xs">
			{tags.length > 0 ? (
				tags.map((tag) => (
					<Link href={`/category/${tag.path}/1`} key={tag.title} legacyBehavior>
						<span className={tagClass}>{tag.title}</span>
					</Link>
				))
			) : (
				<div className="w-full" />
			)}
		</div>
	);
}

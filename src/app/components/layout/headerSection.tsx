import { SheetHeader } from "@/components/ui/sheet";

export default function HeaderSection({
	content,
	title,
}: { content: React.ReactNode; title: React.ReactNode }) {
	return (
		<>
			<SheetHeader className="mb-[10px] h-[20px] border-b" />
			<p className="my-3 font-bold text-sm text-stone-400 sm:text-base ">
				{title}
			</p>

			<ul>{content}</ul>
		</>
	);
}

import { cn } from "@/libs/utils";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderItem({
	link,
	linkType,
	text,
}: { link: string; linkType: "internal" | "external"; text: string }) {
	return (
		<>
			<li className={cn("px-5 py-3 text-sm sm:text-base")}>
				<a
					href={link}
					target={`${linkType === "external" ? "_blank" : ""}`}
					className={`${linkType === "external" ? "flex items-center gap-1" : ""}`}
				>
					{text}
					<FontAwesomeIcon
						icon={faArrowUpRightFromSquare}
						className={`size-3 md:size-4 ${linkType === "external" ? "block" : "hidden"}`}
					/>
				</a>
			</li>
		</>
	);
}

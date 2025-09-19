import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function FooterItem({
	link,
	text,
}: { link: string; text: string }) {
	return (
		<>
			<Link href={link} target="_blank" className="flex items-center gap-1">
				{text}
				<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="size-4" />
			</Link>
		</>
	);
}

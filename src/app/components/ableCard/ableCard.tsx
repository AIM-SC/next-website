import Link from "next/link";
import {
	FontAwesomeIcon,
	type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
	title: string;
	description: string;
	linkArray: {
		name: string;
		link: string;
	}[];
	icon: FontAwesomeIconProps["icon"];
	icon: FontAwesomeIconProps["icon"];
};

export default function AbleCard({
	title,
	description,
	linkArray,
	icon,
}: Props) {
	return (
		<div className="flex h-[430px] flex-col justify-around rounded-md bg-white p-6">
			<h3 className="text-center font-bold text-[26px]">{title}</h3>
			<div className="flex justify-center">
				<FontAwesomeIcon icon={icon} className="size-[120px]" />
			</div>
			<div className="flex justify-center">
				<FontAwesomeIcon icon={icon} className="size-[120px]" />
			</div>
			<p className="text-sm">{description}</p>
			<div className="space-y-2 scroll-smooth">
				{linkArray.map((link) => (
					<Link
						href={link.link}
						className="flex items-center gap-2 rounded-md border border-black px-3 py-2 hover:opacity-70 "
						key={link.name}
						target={link.link.startsWith("https") ? "_blank" : undefined}
					>
						<FontAwesomeIcon icon={faChevronRight} className="size-3" />
						{link.name}
					</Link>
				))}
			</div>
		</div>
	);
}

import Link from "next/link";
import {
	FontAwesomeIcon,
	type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import SectionTitle from "./sectionTitle";

type Props = {
	icon: FontAwesomeIconProps["icon"];
	title: string;
	subtitle: string;
	description: React.ReactNode;
	link: string;
};

const LinkCard = ({ icon, title, subtitle, description, link }: Props) => {
	return (
		<div className="w-full rounded-lg bg-white shadow-md transition-opacity hover:shadow-lg">
			<Link href={link} className="items-center p-4">
				<div className="flex justify-center">
					<FontAwesomeIcon icon={icon} className="size-[100px]" />
				</div>
				<div className="px-2 text-center">
					<SectionTitle maintitle={title} subtitle={subtitle} />
					<p className="whitespace-pre-line">{description}</p>
				</div>
			</Link>
		</div>
	);
};

export default LinkCard;

import Title from "./title";
import Link from "next/link";
import {
	FontAwesomeIcon,
	type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

type Props = {
	icon: FontAwesomeIconProps["icon"];
	title: string;
	subtitle: string;
	description: string;
	link: string;
};

const Box = ({ icon, title, subtitle, description, link }: Props) => {
	return (
		<div className="w-full rounded-md bg-white shadow-lg transition-opacity hover:shadow-xl">
			<Link href={link} className="items-center p-4">
				<div className="flex justify-center">
					<FontAwesomeIcon icon={icon} className="size-[100px]" />
				</div>
				<div className="text-center">
					<Title maintitle={title} subtitle={subtitle} />
					<p>{description}</p>
				</div>
			</Link>
		</div>
	);
};

export default Box;

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CongestionIconsProps = {
	icon: number;
};

export function CongestionIcons({ icon }: CongestionIconsProps) {
	return (
		<div className="flex gap-1">
			{[1, 2, 3, 4].map((index) => (
				<FontAwesomeIcon
					key={index}
					icon={faUser}
					className={`size-4 ${icon >= index ? "text-black" : "text-gray-400"}`}
				/>
			))}
		</div>
	);
}

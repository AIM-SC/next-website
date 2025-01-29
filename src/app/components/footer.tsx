import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const footer = () => {
	return (
		<div>
			<div className="mt-6 flex flex-col items-center justify-center gap-3 font-bold sm:flex-row">
				<Link
					href="https://www.aoyama.ac.jp/"
					target="_blank"
					rel="noreferrer"
					className="flex items-center gap-1"
				>
					青山学院大学公式サイト
					<FontAwesomeIcon icon={faLink} className="size-5" />
				</Link>
				<Link
					href="https://www.aim.aoyama.ac.jp/faq/"
					target="_blank"
					rel="noreferrer"
					className="flex items-center gap-1"
				>
					よくある質問
					<FontAwesomeIcon icon={faLink} className="size-5" />
				</Link>
				<Link
					href="https://www.aim.aoyama.ac.jp/customer_support/"
					target="_blank"
					rel="noreferrer"
					className="flex items-center gap-1"
				>
					お問い合わせ
					<FontAwesomeIcon icon={faLink} className="size-5" />
				</Link>
			</div>
			<div className="my-5 text-center text-gray-500 text-sm">
				&copy; 2025 AIM Commons
			</div>
		</div>
	);
};

export default footer;

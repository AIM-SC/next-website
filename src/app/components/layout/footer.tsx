import Link from "next/link";
import FooterItem from "./footerItem";

const footer = () => {
	return (
		<div>
			<div className="mt-6 flex flex-col items-center justify-center gap-3 font-bold sm:flex-row">
				<FooterItem
					link="https://www.aoyama.ac.jp/"
					text="青山学院大学公式サイト"
				/>
				<FooterItem
					link="https://www.aim.aoyama.ac.jp/faq/"
					text="よくある質問"
				/>
				<FooterItem
					link="https://www.aim.aoyama.ac.jp/customer_support/"
					text="お問い合わせ"
				/>
			</div>
			<div className="text-center text-xs">
				<div className="mt-4">
					本ウェブサイトはAIM Commons 相模原学生スタッフが
					<span className="inline-block">
						作成しました（太田・櫻井・西堀・ほか匿名希望1名）
					</span>
				</div>
				<div className="mt-2">
					万が一掲載内容に相違があった場合は、
					<span className="inline-block">
						<Link
							href="https://www.aim.aoyama.ac.jp/"
							target="_blank"
							className="text-blue-500 hover:opacity-70"
						>
							情報メディアセンター
						</Link>
						の案内が優先されます。
					</span>
				</div>
			</div>
			<div className="my-5 text-center text-gray-500 text-sm">
				&copy; 2025 AIM Commons 相模原
			</div>
		</div>
	);
};

export default footer;

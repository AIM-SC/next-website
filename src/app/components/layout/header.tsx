import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeaderSection from "./headerSection";
import HeaderItem from "./headerItem";

export default function Header() {
	// ヘッダーセクションのデータ
	const headerSections = [
		{
			id: "beginner",
			title: (
				<>
					AIM Commons 相模原を
					<span className="inline-block">初めて使う方へ</span>
				</>
			),
			items: [
				{
					link: "/introduce",
					linkType: "internal" as const,
					text: "施設紹介",
				},
				{
					link: "https://docs.google.com/spreadsheets/d/1pGRuvjajI833WFWqME8QbjGkraUQzgZ-Fp241Tbu7I8/edit?gid=0#gid=0",
					linkType: "external" as const,
					text: "貸出機器一覧",
				},
			],
		},
		{
			id: "advanced",
			title: (
				<>
					AIM Commons 相模原を
					<span className="inline-block">使いこなしたい方へ</span>
				</>
			),
			items: [
				{
					link: "https://ima-sc.notion.site/7fd23df752674abb95261bdc54b3de28",
					linkType: "external" as const,
					text: "ワークショップ",
				},
				{
					link: "/info",
					linkType: "internal" as const,
					text: "お知らせ",
				},
				{
					link: "/movies",
					linkType: "internal" as const,
					text: "YouTube動画",
				},
				{
					link: "/blog",
					linkType: "internal" as const,
					text: "業務ブログ",
				},
			],
		},
		{
			id: "engagement",
			title: (
				<>
					もっとAIM Commons 相模原に
					<span className="inline-block">関わりたい方へ</span>
				</>
			),
			items: [
				{
					link: "/recruit",
					linkType: "internal" as const,
					text: "学生スタッフ採用",
				},
			],
		},
	];

	return (
		<header className="h-[100px] border-b">
			<div className="container mx-auto flex h-full items-center justify-between px-[15px]">
				<Link href="/">
					<Image
						src="/images/logo/nav_logo.svg"
						width={200}
						height={100}
						alt="ロゴ"
					/>
				</Link>

				<div>
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="outline">
								<AlignJustify />
							</Button>
						</SheetTrigger>
						<SheetContent className="max-h-screen overflow-y-auto pb-10">
							<a href="/" className="inline-block w-fit">
								<Image
									src="/images/logo/nav_logo.svg"
									width={200}
									height={100}
									className="block"
									alt="ロゴ"
								/>
							</a>
							{headerSections.map((section) => (
								<HeaderSection
									key={section.id}
									title={section.title}
									content={section.items.map((item) => (
										<HeaderItem
											key={item.text}
											link={item.link}
											linkType={item.linkType}
											text={item.text}
										/>
									))}
								/>
							))}
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}

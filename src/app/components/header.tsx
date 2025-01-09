import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/libs/utils";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MenuList = [
	{ label: "利用案内", value: "instruction" },
	{ label: "お知らせ", value: "info" },
	{ label: "技術ブログ", value: "blog" },
	{ label: "施設紹介", value: "introduce" },
	{ label: "動画配信", value: "movies" },
	{ label: "業務紹介", value: "job-intro" },
];

export default function Header() {
	return (
		<header className="h-[100px] border-b">
			<div className="container mx-auto flex h-full items-center justify-between px-[15px]">
				<Link href="/">
					<Image
						src="/images/nav_logo.svg"
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
						<SheetContent>
							<SheetHeader className="mb-[10px] h-[80px] border-b" />
							<ul>
								{MenuList.map((item) => (
									<li key={item.value} className={cn("px-5 py-3")}>
										<Link href={`/${item.value}`}>{item.label}</Link>
									</li>
								))}
								<li className={cn("px-5 py-3")}>
									<Link href={"https://docs.google.com/spreadsheets/d/1pGRuvjajI833WFWqME8QbjGkraUQzgZ-Fp241Tbu7I8/edit?gid=0#gid=0"} target="_blank">貸出機器一覧</Link>
								</li>
								<li className={cn("px-5 py-3")}>
									<Link href={"https://ima-sc.notion.site/7fd23df752674abb95261bdc54b3de28"} target="_blank">ワークショップ</Link>
								</li>
								<li className={cn("px-5 py-3")}>
									<Link href={"https://www.aim.aoyama.ac.jp/customer_support/"} target="_blank">お問い合わせ</Link>
								</li>
							</ul>
						</SheetContent>
					</Sheet>
				</div>

				{/*lg以上でのメニュー*/}
				{/* <ul className="hidden items-center lg:flex">
                    {MenuList.map((item, i) => (
                        <li key={item.value} className={
                            cn(
                                "border-r",
                                "border-dashed",
                                "px-5 py-3",
                                "border-black",
                                i === 0 && "border-l"
                            )}>
                            <Link href={`/${item.value}`}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul> */}
			</div>
		</header>
	);
}

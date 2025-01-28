import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/libs/utils";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
							<a href="/" className="inline-block w-fit">
								<Image
									src="/images/nav_logo.svg"
									width={200}
									height={100}
									className="block"
									alt="ロゴ"
								/>
							</a>
							<SheetHeader className="mb-[10px] h-[20px] border-b" />

							<p className="my-3 font-bold text-stone-400">
								AIM Commonsを初めて使う方へ
							</p>
							<ul>
								<li className={cn("px-5 py-3")}>
									<a href={"/introduce"}>利用案内</a>
								</li>
								<li className={cn("px-5 py-3")}>
									<a
										href={
											"https://docs.google.com/spreadsheets/d/1pGRuvjajI833WFWqME8QbjGkraUQzgZ-Fp241Tbu7I8/edit?gid=0#gid=0"
										}
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-1"
									>
										貸出機器一覧
										<FontAwesomeIcon icon={faLink} className="size-5" />
									</a>
								</li>
							</ul>
							<SheetHeader className="mb-[10px] h-[20px] border-b" />
							<p className="my-3 font-bold text-stone-400">
								AIM Commonsを使いこなしたい方へ
							</p>
							<p className="my-2 ml-2 font-bold text-stone-400">
								ワークショップ
							</p>
							<ul className="mb-1">
								<li className={cn("px-5 py-3")}>
									<a
										href={
											"https://aimcommons.notion.site/3512196d259c42f1848120df30cc5443"
										}
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-1"
									>
										ワークショップ(青山キャンパス)
										<FontAwesomeIcon icon={faLink} className="size-5" />
									</a>
								</li>
								<li className={cn("px-5 py-3")}>
									<a
										href={
											"https://ima-sc.notion.site/7fd23df752674abb95261bdc54b3de28"
										}
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-1"
									>
										ワークショップ (相模原キャンパス)
										<FontAwesomeIcon icon={faLink} className="size-5" />
									</a>
								</li>
							</ul>
							<p className="my-2 ml-2 font-bold text-stone-400">
								AIM Commonsからの情報発信
							</p>
							<ul>
								<li className={cn("px-5 py-3")}>
									<a href={"/info"}>お知らせ</a>
								</li>
								<li className={cn("px-5 py-3")}>
									<a href={"/blog"}>技術ブログ</a>
								</li>
								<li className={cn("px-5 py-3")}>
									<a href={"/movies"}>YouTube動画</a>
								</li>
							</ul>
							<SheetHeader className="mb-[10px] h-[20px] border-b" />
							<p className="my-3 font-bold text-stone-400">
								もっとAIM Commonsに関わりたい方へ
							</p>
							<ul>
								<li className={cn("px-5 py-3")} >
									<a href={"/recruit"}>学生スタッフ採用</a>
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

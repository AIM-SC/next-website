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
							<Link href="/" className="inline-block w-fit">
								<Image
									src="/images/nav_logo.svg"
									width={200}
									height={100}
									className="block"
									alt="ロゴ"
								/>
							</Link>
							<SheetHeader className="mb-[10px] h-[20px] border-b" />

							<p className="my-3 font-bold text-stone-400">
								AIM Commonsを初めて使う方へ
							</p>
							<ul>
								<li className={cn("px-5 py-3")}>
									<Link href={"/instruction"}>利用案内</Link>
								</li>
								<li className={cn("px-5 py-3")}>
									<Link
										href={
											"https://docs.google.com/spreadsheets/d/1pGRuvjajI833WFWqME8QbjGkraUQzgZ-Fp241Tbu7I8/edit?gid=0#gid=0"
										}
										target="_blank"
									>
										貸出機器一覧
										<span className="material-symbols-outlined mb-1 ml-1 align-middle">
											link
										</span>
									</Link>
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
									<Link
										href={
											"https://aimcommons.notion.site/3512196d259c42f1848120df30cc5443"
										}
										target="_blank"
									>
										ワークショップ(青山キャンパス)
										<span className="material-symbols-outlined mb-1 ml-1 align-middle">
											link
										</span>
									</Link>
								</li>
								<li className={cn("px-5 py-3")}>
									<Link
										href={
											"https://ima-sc.notion.site/7fd23df752674abb95261bdc54b3de28"
										}
										target="_blank"
									>
										ワークショップ (相模原キャンパス)
										<span className="material-symbols-outlined mb-1 ml-1 align-middle">
											link
										</span>
									</Link>
								</li>
							</ul>
							<p className="my-2 ml-2 font-bold text-stone-400">
								AIM Commonsからの情報発信
							</p>
							<ul>
								<li className={cn("px-5 py-3")}>
									<Link href={"/info"}>お知らせ</Link>
								</li>
								<li className={cn("px-5 py-3")}>
									<Link href={"/blog"} target="_blank">
										技術ブログ
									</Link>
								</li>
								<li className={cn("px-5 py-3")}>
									<Link href={"/movies"} target="_blank">
										配信動画
									</Link>
								</li>
							</ul>
							<SheetHeader className="mb-[10px] h-[20px] border-b" />
							<p className="my-3 font-bold text-stone-400">
								もっとAIM Commonsに関わりたい方へ
							</p>
							<ul>
								<li className={cn("px-5 py-3")}>
									<Link href={"/recruit"}>学生スタッフ採用</Link>
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

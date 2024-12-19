import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/libs/utils";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const MenuList = [
    { label: "利用案内", value: "guide" },
    { label: "お知らせ", value: "news" },
    { label: "技術ブログ", value: "technical-blog" },
    { label: "施設紹介", value: "introduce" },
    { label: "動画配信", value: "movies" },
    { label: "業務内容", value: "works" },
    { label: "お問い合わせ", value: "contacts"}
]

export default function Header() {
    return (
        <header className="h-[100px] border-b">
            <div className="container mx-auto flex h-full items-center justify-between px-[15px]">
                <Link href="/">
                    <Image src="/images/nav_logo.svg" width={200} height={100} alt="ロゴ" />
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
                                    <li key={item.value} className={
                                        cn(
                                            "px-5 py-3",
                                        )}>
                                        <Link href={`/${item.value}`}>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
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
    )
}

import Link from "next/link";

type Props = {
    title: string;
    description: string;
    linkArray: {
        name: string;
        link: string
    }[];
    srcUrl: string;
}

export default function AbleCard({ title, description, linkArray, srcUrl }: Props) {
    return (
        <div className="flex h-[430px] flex-col justify-around rounded-md bg-white p-6">
            <h3 className="text-center font-bold text-[26px]">{title}</h3>
            <img src={srcUrl} alt="" className="mx-auto" />
            <p className="text-sm">
                {description}
            </p>
            <div className="space-y-2">
                {linkArray.map((link) => (
                    <div className="rounded-md border border-black px-3 py-2" key={link.name}>
                        <Link href={link.link}>
                            {link.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div >
    );
}

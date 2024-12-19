type Props = {
    image: string;
    title: string;
    subtitle: string;
    link: string;
    time: string[];
    notes?: string[]; // 配列として定義
};

const Explain = ({ image, title, subtitle, link, time, notes }: Props) => {
    return (
        <div className="mb-4 rounded-lg bg-white p-6">
            <img src={image} alt="" className="rounded-md" />
            <div className="m-2 text-left">
                <h2 className="text-xl">{title}</h2>
                <h3>{subtitle}</h3>
                <div className="p-3">
                    <a href={link} className="rounded-lg bg-[#F0EBDC] p-3">利用案内はこちら</a>
                    {time && time.length > 0 && (
                    <ul className="list-none">
                        {time.map((time, index) => (
                            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                            <li key={index}>{time}</li>
                        ))}
                    </ul>
                )}
                </div>
                {notes && notes.length > 0 && (
                    <ul className="list-disc pl-5">
                        {notes.map((note, index) => (
                            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                            <li key={index}>{note}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Explain;

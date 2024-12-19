type Props = {
    image: string;
    text: string;
    note?: string;
};

const Rule = ({ image, text, note }: Props) => {
    return (
        <div className="mb-4 rounded-lg bg-white p-6">
            <img src={image} alt="" />
            <p>{text}</p>
            <p className="text-[#8C8C8C]">{note}</p>
        </div>
    );
};

export default Rule;

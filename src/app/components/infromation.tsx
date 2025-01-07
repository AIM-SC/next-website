import Title from './title';
import  Link from "next/link"

type Props = {
  title: string;
  notes: string;
  subtitle: string;
  content: Array<{ name: string; time: string; id: string}>;
};

const Information = ({ title, notes, subtitle, content,  }: Props) => {
  return (
    <div className="mb-4 rounded-lg bg-white p-6">
      <div className="mb-4 border-b text-center">
        <Title maintitle={title} subtitle={subtitle} notes={notes}/>
      </div>
      <div className="flex flex-col space-y-2 text-center">
        {content.map((item) => (
          <div key={item.name}>
            <a href={`/info/article/${item.id}`}>
              <div className="flex flex-col justify-between transition-opacity hover:opacity-50 md:flex-row">
                <span className="">{item.time}</span>
                <span className="text-gray-800 ">{item.name}</span>
              </div>
            </a>

            <hr className="my-2 border-0 border-gray-400 border-t border-dashed" />
          </div>
        ))}
        <Link href="/info" className="transition-opacity hover:opacity-50">一覧を見る</Link>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Information;

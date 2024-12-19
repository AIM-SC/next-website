import Rule from '../../components/rule';
import Explain from '@/app/components/explain'; 

const InstractionPage = async () => {
  return (
    <div className="bg-[#F0EBDC] text-black leading-10">
      <div className="mx-[3%] my-[5%] max-w-full py-[75px] pb-[30px]">
        <div
          id="side_line"
          className="writing-mode-vertical-rl fixed font-semibold text-xs tracking-wide"
        >
          <div className="left_side fixed top-[280px] left-[7px] ml-1 hidden [writing-mode:vertical-rl] lg:block">
            <p>AIM COMMONS</p>
          </div>
          <div className="right_side fixed top-[280px] right-[7px] mr-1 hidden [writing-mode:vertical-rl] lg:block">
            <p>AIM COMMONS</p>
          </div>
        </div>
        <div className="mb-[3%] flex flex-col gap-4 px-[13%]">
          <div className="text-center font-bold text-[#d9ae4c] text-base">
            INSTRUCTION
          </div>
          <div className="text-center font-semibold text-3xl text-black">
            利用案内
          </div>
          <div className="text-center font-bold text-gray-600 text-lg">
            アクセス/PC・機器貸出方法についてご紹介します
          </div>
        </div>

        <div className="rounded-md bg-white p-1 text-center md:p-11">
          <h2 className="font-bold text-xl">アクセスマップ</h2>
          <p className='text-[#8C8C8C]'>青山：18号館　地下1階・1階</p>
          <img src="/images/go01.jpg" alt="" />
          <p className='text-[#8C8C8C]'>相模原：B棟　4階</p>
          <img src="/images/go02.jpg" alt="" />
          <h3>相模原キャンパス：動画での説明は<a href="http://localhost:3000/instruction" className='text-[#d9ae4c]'>こちら</a></h3>
          <h2 className="my-8 font-bold text-xl">開室時間</h2>
          <div className="m-8 flex flex-col justify-center md:flex-row">
            <div className="mr-5 flex items-center justify-center">
              <p className='m-3 text-xl'>青山</p>
              <p className='text-3xl text-[#d9ae4c]'>9:00-17:00</p>
            </div>
            <div className="flex items-center justify-center">
              <p className='m-2 text-xl'>相模原</p>
              <p className="text-3xl text-[#d9ae4c]">9:00-20:00</p>
            </div>
          </div>
          <h2 className="font-bold text-xl">利用者が気持ちよく使うためのお願い</h2>
          <div className='m-8 grid grid-cols-1 gap-4 text-center sm:grid-cols-3 md:grid-cols-3'>
            <Rule image="/images/rule01.png" text="学習目的での利用をお願いします" note="" />
            <Rule image="/images/rule02.png" text="食事はできません" note="(蓋が閉まる＆直立する飲み物は飲むことができます)" />
            <Rule image="/images/rule03.png" text="荷物を置いての長時間退出はご遠慮ください" note="" />
            <Rule image="/images/rule04.png" text="他の人の学習の妨げになる音出しはご遠慮ください" note="(ゲーム、大きな声での会話モニターを使用した動画鑑賞など)" />
            <Rule image="/images/rule05.png" text="睡眠目的での利用はご遠慮ください" note="" />
            <Rule image="/images/rule06.png" text="各座席に決められた定員数を守ってください" note="" />
          </div>
          <h2 className="font-bold text-xl">PC・機器貸出方法</h2>
          <h3>利用には<span className='text-[#d9ae4c]'>学生証</span>が必要です！必ず持参してください</h3>
          <div className="m-8 grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
            <Explain
                image="/images/lend01.jpg"
                title="PC（受付）"
                subtitle="受付での手続きが必要です。"
                link="https://www.aim.aoyama.ac.jp/rental/note-pc/"
                time={[
                  "青山：受付での貸し出しサービスはありません",
                  "相模原：9:45~16:30 (返却は16:45まで)"
                ]}
                notes={[
                    "当日返却、利用は学内のみでお願いします。",
                    "電源を消すと自動的にデータが消去されるため、PC本体内にデータは保存できません。",
                ]}
            />
            <Explain
                image="/images/lend02.jpg"
                title="PC（ロッカー）"
                subtitle="受付を通さず、ロッカーに学生証をかざすだけで借りることができます。"
                link="https://www.aim.aoyama.ac.jp/rental/note-pc/"
                time={[
                  "相模原：9:45~16:30 (返却は16:45まで)",
                  "青山：8:30~22:00"
                ]}
                notes={[
                    "当日返却、利用は学内のみでお願いします。",
                    "電源を消すと自動的にデータが消去されるため、PC本体内にデータは保存できません。",
                ]}
            />
            <Explain
                image="/images/lend03.jpg"
                title="機材"
                subtitle="受付での手続きが必要です。利用後に、アンケートの記入にご協力お願いします"
                link="https://www.aim.aoyama.ac.jp/rental/production/"
                time={[
                  "9:45~16:30 (返却は16:45まで)"
                ]}
                notes={[
                  "一部機器は、B422教室内のみでの利用。",
                  "翌営業日までの返却で、学外へ持ち出しが可能。",
                  "詳しい貸出機器に関しては貸出機材一覧表をご確認ください.",
                  "2週間先までの予約が可能です。"
                ]}
            />
            <Explain
                image="/images/lend04.jpg"
                title="静音 (相模原) ・編集ブース"
                subtitle="受付での手続きが必要です。"
                link="https://www.aim.aoyama.ac.jp/rental/production/"
                time={[
                  "9:45~16:30 (返却は16:45まで)"
                ]}
                notes={[
                  "2週間先までの予約が可能です。",
                  "編集ブースのPCは、電源を消すと自動的にデータが消去され、PC本体内にデータは保存できません。"
                ]}
            />
          </div>

        </div>
        

      </div>
    </div>
  );
};

export default InstractionPage;

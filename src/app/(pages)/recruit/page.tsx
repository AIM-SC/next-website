import Heading from "@/app/components/heading";
import JobIntroduction from "@/app/components/jobIntroduction";
import Image from "next/image";
import Link from "next/link";

const jobIntroductionPage = () => {
  return (
    <div className="py-[75px] font-bold text-[20px] text-black leading-10">
      <Heading
        engTitle="RECRUIT"
        jpTitle="学生スタッフ採用"
        abst="AIM Commonsで働く学生スタッフの業務を紹介します"
      />
      <div className="my-8 items-center justify-center gap-4 rounded bg-white p-12 pb-[4%] lg:p-16 flex flex-col-reverse xl:flex-row">
        <div className="w-full xl:w-1/2">
          <Image
            src="/images/about.png"
            alt="AIMの説明画像"
            className="mb-4 h-auto w-full rounded-md"
            width={500}
            height={300}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full xl:ml-4 xl:w-1/2">
          <div className="font-bold text-lg md:text-[26px]">
            <h1 className="mb-2 leading-7 md:leading-9">
              AIM Commonsの学生スタッフとは？
            </h1>
            <div className="my-2 text-[#d9ae4c] text-sm">STUDENT STAFF</div>
          </div>
          <div className="leading-loose text-base font-normal space-y-4">
            <p>
              AIM
              Commonsでは、一緒に楽しく働く学生スタッフを定期的に募集しています！
              <br />
              受付・貸出業務をはじめ、ワークショップの講師、情報技術業務、広報活動などの様々なことにチャレンジできるのが魅力です。
              <br />
              「IT-A」とはまた違った AIM Commons ならではの仕事がたくさん！
            </p>
            <ul className="list-disc ml-4">
              <li>募集対象: 青山学院大学の学部生・大学院生</li>
              <li>募集時期: 前期・後期 各1回</li>
              <li>選考方法: 書類選考＋面接</li>
            </ul>
            <p>
              詳細は、募集時期に
              <Link
                href="/info"
                className="text-[#d9ae4c] underline hover:opacity-70"
              >
                このサイト
              </Link>
              および学生ポータルでお知らせします。
              <br />
              一緒に楽しく業務に関わってみませんか？
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-md bg-white pt-[3%]">
        <div>
          <h3 className="mb-1 text-center text-2xl">業務紹介</h3>
          <div className="text-center font-bold text-[#d9ae4c] text-sm md:text-base">
            JOB INTRODUCE
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 p-12 pb-[4%] lg:grid-cols-2 lg:gap-16 lg:p-16 xl:grid-cols-3">
          <JobIntroduction
            image="/images/pc_rental.jpg"
            title="PC貸出"
            text={
              <div className="indent-4 font-normal">
                <div>
                  AIM
                  Commonsでは、学生がキャンパス内の自由な場所でPCを利用できるように、ノートPCを貸し出しています！
                  返却されたPCの内容物の確認や充電のチェックなども学生スタッフの役割です。
                </div>
                <div>
                  自動貸出ロッカーからの返却PCもみんなで協力してメンテナンスします。
                </div>
              </div>
            }
          />
          <JobIntroduction
            image="/images/IMG_0091.JPG"
            title="機器貸出"
            text={
              <div className="indent-4 font-normal">
                <div>
                  AIM
                  Commonsでは、学生・教員の発展的な学びを支援するため、4Kビデオカメラや動画編集設備などのちょっとワクワクする機材やスペースの貸出もしています！
                </div>
                <div>
                  これらの機器の使い方を習得したのち、利用者のニーズに合った機器を提案し、貸出対応を行います。
                  「こんなことがやりたい！」という学生のチャレンジを一緒に応援しましょう。
                </div>
              </div>
            }
          />
          <JobIntroduction
            image="/images/workshop01.jpg"
            title="ワークショップ"
            text={
              <div className="indent-4 font-normal">
                <div>
                  AIM
                  Commonsでは、機材やソフトウェアを体験できるワークショップを毎日実施中！
                  現在ではAdobeの画像・動画編集ソフトや、一眼レフカメラなどをテーマに、学生スタッフが講師として活躍します。
                  講師になるためのフォローアップも充実しているので、自分のスキルも高めるチャンスです！
                </div>
                <div>
                  ワークショップの詳細は
                  <Link
                    href="https://ima-sc.notion.site/7fd23df752674abb95261bdc54b3de28"
                    target="_blank"
                    className="text-[#d9ae4c] underline hover:opacity-70"
                  >
                    こちら
                  </Link>
                  から。
                </div>
              </div>
            }
          />
          <JobIntroduction
            image="/images/commercial.png"
            title="広報活動"
            text={
              <div className="indent-4 font-normal">
                <div>
                  AIM
                  Commonsを多くの学生に知ってもらうため、ポスターや紹介パンフレット、プロムナードに設置される看板等を自分たちでデザイン・制作します！
                </div>
                <div>
                  完成物は、AIM
                  Commons周辺や食堂など、多くの学生が目にする場所に掲示されます。
                </div>
              </div>
            }
          />
          <JobIntroduction
            image="/images/job-video.jpeg"
            title="動画制作"
            text={
              <div className="indent-4 font-normal">
                <div>
                  青山学院の学生に向けた、YouTube動画の制作を行います。動画編集だけにとどまらず、企画、ナレーター、出演者としても活躍する機会があります。
				  クリエイティビティを存分に発揮して、AIM CommonsをPRしましょう！
                </div>
       
                  <div>
                    YouTubeチャンネルは
                    <Link
                      href="https://www.youtube.com/channel/UCPvxIswjXQ1VU2H3WyBss8w"
                      target="_blank"
                      className="text-[#d9ae4c] underline hover:opacity-70"
                    >
                      こちら
                    </Link>
                    から。
                  </div>
                
              </div>
            }
          />
          <JobIntroduction
            image="/images/job-system.png"
            title="システム開発(相模原)"
            text={
              <div className="indent-4 font-normal">
                <div>
                  業務で用いるシステムや当ウェブサイトの新規開発・保守を行います。WEB開発を中心に、最新の技術を積極的に取り入れています。
                  プログラミングはもちろん、チーム開発の経験を積みたいという人におすすめです！
                </div>
                <div>
                  開発時の工夫や具体的な取り組みについては、
                  <Link
                    href="/blog"
                    className="text-[#d9ae4c] underline hover:opacity-70"
                  >
                    業務ブログ
                  </Link>
                  で詳しく紹介しています。
                </div>
              </div>
            }
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default jobIntroductionPage;

import JobIntroduction from "@/app/components/jobIntroduction"

const jobIntroductionPage = () => {
  return (
    <div className="my-[5%] pt-[55px] pb-[30px] bg-[#F0EBDC]">
          <div className="left_side fixed top-[280px] left-[7px] ml-1 hidden [writing-mode:vertical-rl] lg:block">
            <p>AIM COMMONS</p>
          </div>
          <div className="right_side fixed top-[280px] right-[7px] mr-1 hidden      [writing-mode:vertical-rl] lg:block">
            <p>AIM COMMONS</p>
        </div>

      <div className="text-base text-[#d9ae4c] text-center font-bold mb-5">JOB INTRODUCTION</div>
      <div className="text-3xl text-black text-center font-semibold mb-5">業務紹介</div>
      <div className="text-lg text-black text-center font-bold">受付で常駐している学生スタッフの業務をご紹介します</div>

        <div className="bg-white mx-[3%] mt-[1%] rounded-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <JobIntroduction image="/images/IMG_0091.JPG" alt = "test" title="PC貸出" text='ICTを用いた学びを支援するカメラや充電器、ブースの貸出を行います。貸出機器の一覧は<a href="https://www.google.co.jp/" target=blank class="text-blue-500 underline">こちら</a>'/>
            <JobIntroduction image="/images/floor01.jpg" alt = "test" title="機器貸出" text="ICTを用いた学びを支援するカメラや充電器、ブースの貸出を行います。貸出機器の一覧はこちら"/>
            <JobIntroduction image="/images/floor01.jpg" alt = "test" title="test" text="test"/>
            <JobIntroduction image="/images/floor01.jpg" alt = "test" title="test" text="test"/>
        </div>
    </div>
  );
};

export default jobIntroductionPage;


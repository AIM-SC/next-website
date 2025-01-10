import SwitchCampus from "../../components/switchCampus";

const moviePage = async () => {
	return (
		<div className="text-[20px] text-black leading-10">
			<div className="mb-[3%] flex flex-col gap-4 px-[13%]">
				<div className="text-center font-bold text-[#d9ae4c] text-base">
					FACILITIES
				</div>
				<div className="text-center font-semibold text-4xl text-black">
					施設紹介
				</div>
				<div className="text-center font-bold text-gray-600 text-lg">
					設備について詳しくご紹介します
				</div>
			</div>

			<div className="min-h-screen bg-[#F0EBDC]">
				<SwitchCampus />
			</div>
		</div>
	);
};

export default moviePage;

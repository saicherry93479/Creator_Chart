
import Tanya from "../assets/Tanya.png";
import Sarthak from "../assets/Sarthak.png";
const Team = () => {
  return (
    <div>
      <div className="relative isolate bg-transparent px-6  py-10 lg:px-8 md:py-24">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h1 className="__className_b3f6a0 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Our Team <br />
            <span className="relative bg-clip-text text-transparent bg-gradient-to-t from-violet-600 to-violet-600/[0.8] z-10 dark:text-white"></span>
          </h1>
        </div>
        <p className="mx-auto mt-6 mb-20 max-w-lg text-center text-lg leading-8 text-gray-600 dark:text-gray-200">
        </p>
        <div className="mx-auto flex flex-col  md:flex-row justify-center gap-4 max-w-[83rem] ">
          <div>
            <div className="bg-violet-600  rounded-[20px] mb-2">
              <img src={Tanya}></img>
            </div>
            <h1 className="text-[20px] text-black md:text-[24px] font-bold dark:text-white/80   ">
              Tanya Dubey
            </h1>
            <p className="text-black text-[12px] dark:text-white">Co-Founder, CEO</p>
          </div>
          <div>
            <div className="bg-violet-600  rounded-[20px] mb-2">
              <img src={Sarthak}></img>
            </div>
            <h1 className="text-[20px] md:text-[24px] font-bold text-black dark:text-white/80  ">
              Sarthak Mishra
            </h1>
            <p className="text-black  dark:text-white text-[12px]">Co-Founder, COO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

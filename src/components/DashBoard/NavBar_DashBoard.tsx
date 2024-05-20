import { DropDownIcon } from "./DropDownIcon";
import PostWallIcon from "../../Icons/PostWallIcon";
import ScheduleCallIcon from "../../Icons/ScheduleCallIcon";
import GuidedSetupIcon from "../../Icons/GuidedSetupIcon";
import ElipssesIcon from "../../Icons/ElipssesIcon";

const NavBar_DashBoard = ({ setCurrentScreen }: any) => {
  return (
    <div className="bg-[#121827]  bottom-0 left-0 top-0  fixed h-screen hidden w-64 md:relative md:block ">
      <div className=" flex h-full w-full flex-col overflow-y-auto border-r-[1px] p-2 border-white/20">
        <div className="flex-grow py-4">
          <div className="space-y-6">
            <ul className="space-y-1 px-3">
              <TopprofileBox></TopprofileBox>
              <li>
                <div className="relative">
                  <button
                    className="btn border-yellow-400 bg-yellow-400 text-gray-900 dark:border-yellow-500 dark:bg-yellow-500 dark:subpixel-antialiased w-full flex items-center space-x-1 leading-5 px-[10px] py-[10px] rounded-[100px] justify-center mt-4 "
                    id="headlessui-menu-button-:r2i:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-headlessui-state=""
                    type="button"
                  >
                    <div>New</div>
                    <DropDownIcon></DropDownIcon>
                  </button>
                </div>
              </li>
            </ul>
            <ul className="space-y-1 px-3">
              <li>
                <div className="block  cursor-pointer group rounded-full py-2 pl-2 pr-3 text-sm font-medium leading-5 transition duration-300 ease-in-out ~text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <div className="flex items-center">
                    <GuidedSetupIcon></GuidedSetupIcon>
                    <div className="ml-1.5 grow text-white group-hover:text-violet-500 ">Guided Setup</div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="space-y-1 px-3">
              <li>
                <div
                  onClick={() => setCurrentScreen(1)}
                  className="block cursor-pointer group rounded-full py-2 pl-2 pr-3 text-sm font-medium leading-5 transition duration-300 ease-in-out ~text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="flex items-center">
                    <PostWallIcon></PostWallIcon>
                    <div className="ml-1.5 grow text-white group-hover:text-violet-500">Post Wall Ideas</div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  onClick={() => setCurrentScreen(2)}
                  className="block cursor-pointer group  rounded-full py-2 pl-2 pr-3 text-sm font-medium leading-5 transition duration-300 ease-in-out ~text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="flex items-center">
                    <ScheduleCallIcon></ScheduleCallIcon>
                    <div className="ml-1.5 grow text-white group-hover:text-violet-500">Schedule  Call</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-5 px-5 py-5 text-sm">
          <p className="~text-gray-600 pb-4">
            To be update with the community.Please join the waitlist
          </p>
          <div>
            <a
              className="bg-blue-700 px-4 py-2 rounded-[100px]"
              href="/billing"
            >
              join waitlist →
            </a>
          </div>
        </div>
        <div className="pb-3">
          <div className="px-3">
            <div className="relative">
              <button
                className="~text-gray-700 ~hover:bg-gray-100 flex w-full items-start space-x-2 rounded-md px-2 py-2 text-sm focus:outline-none focus:ring"
                id="headlessui-menu-button-:r2k:"
                type="button"
                aria-haspopup="menu"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                  <div
                    aria-label="Avatar for cherry brezzy"
                    className="flex select-none items-center justify-center overflow-hidden rounded-full bg-slate-500 text-white h-6 w-6"
                  >
                    <span className="text-xs font-bold leading-none">CB</span>
                  </div>
                </div>
                <div className="min-w-0 flex-grow space-y-1/2 text-left leading-5">
                  <div className="truncate font-medium">cherry brezzy</div>
                  <div className="~text-gray-500 truncate">saicherry93479</div>
                </div>
                <ElipssesIcon></ElipssesIcon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar_DashBoard;

const TopprofileBox = () => {
  return (
    <div className="relative rounded-xl  border border-white/20 transition focus-within:ring">
      <button
        className="w-full transform rounded-xl p-5 text-left transition duration-150 ease-in-out bg-violet-600  dark:hover:backdrop-blur hover:bg-violet-700 dark:bg-opacity-75 dark:hover:bg-violet-800 dark:hover:bg-opacity-100 block"
        type="button"
      >
        <div
          aria-label="Avatar for cherry brezzy"
          className="flex select-none items-center justify-center overflow-hidden rounded-full bg-red-400 text-white h-12 w-12"
        >
          <span className="text-lg font-bold leading-none">CB</span>
        </div>
        <h2 className="~text-gray-800 mt-3 text-[26px] font-bold leading-8 tracking-snug">
          cherry brezzy
        </h2>
        <div className="~text-gray-700 link-description mt-1.5 line-clamp-3 leading-normal">
          <p>Let's find a time to meet!</p>
        </div>
      </button>
    </div>
  );
};

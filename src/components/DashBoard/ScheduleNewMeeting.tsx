
import PlusIcon from "../../Icons/PlusIcon";
import MenuIcon from "../../Icons/MenuIcon";

const ScheduleNewMeeting = () => {
  return (
    <main className="  w-screen bg-white  dark:bg-[#121827] ">
      {/* <GlobalModal></GlobalModal> */}
      <div className="sticky top-0 z-20 bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90">
        <div className="border-b border-white/20">
          <div className="flex min-w-0 items-center py-3.5 pl-6 pr-4 leading-5 border-b border-[#eee]  dark:border-white/20 ">
            <div className="mr-2 flex w-6 shrink-0 justify-center md:hidden">
              <button className="text-gray-900 hover:text-gray-700 flex h-8 items-center">
                <MenuIcon></MenuIcon>
              </button>
            </div>
            <h2 className="text-gray-900 mr-5  text-black shrink-0 grow truncate whitespace-nowrap text-lg font-bold leading-8 dark:text-gray-100">
              Meetings
            </h2>
            <div className="flex gap-2  bg-blue-700 items-center justify-center text-gray-900 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-200 focus:outline-none focus:ring  p-2 sm:px-4 sm:py-2 rounded-full">
              <p className="hidden sm:block text-white dark:text-white">
                Schedule Meeting{" "}
              </p>
              <PlusIcon></PlusIcon>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="grow">
                <div className="flex flex-nowrap space-x-6 overflow-x-auto overflow-y-visible px-6">
                  <a
                    className="block whitespace-nowrap border-b-[3px] pt-2 pb-3 text-sm font-medium focus:outline-none text-gray-900 dark:text-white border-blue-500 dark:border-blue-500"
                    href="/dashboard"
                  >
                    Open
                  </a>
                  <a
                    className="block whitespace-nowrap border-b-[3px] pt-2 pb-3 text-sm font-medium focus:outline-none text-gray-500 dark:text-gray-400 border-transparent hover:border-gray-200 dark:hover:border-gray-700 focus:border-gray-200 dark:focus:border-gray-700"
                    href="/dashboard"
                  >
                    Closed
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative pb-12">
        <div className="py-16">
          <div className="mx-auto max-w-lg px-6 text-center">
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white dark:text-gray-900 from-violet-300 to-purple-600">
                <svg
                  className="feather feather-check-square"
                  fill="none"
                  height={32}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={32}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
            </div>
            <h2 className="text-gray-900 mt-6 text-3xl font-bold leading-10">
              Schedule a new call
            </h2>
            <p className="mx-auto mt-2 px-4 text-base text-gray-600 dark:text-gray-400">
              Invite people to vote on a set of times to meet and book the one
              that works best.
            </p>
            <div className="mt-5 flex justify-center">
              <button className="bg-blue-700  rounded-[100px] px-4 py-2">
                New schedule call{" "}
              </button>
            </div>
            <div className="mt-8 flex justify-center border-t pt-6">
              <a
                className="text-gray-500 flex items-center space-x-2 text-sm hover:underline"
                href="https://docs.savvycal.com/article/79-scheduling-group-meetings-with-polls"
                target="_blank"
              >
                <div>
                  <svg
                    className="feather feather-info"
                    fill="none"
                    height={20}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <line x1={12} x2={12} y1={16} y2={12} />
                    <line x1={12} x2="12.01" y1={8} y2={8} />
                  </svg>
                </div>
                <div>Learn more about meeting polls</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ScheduleNewMeeting;

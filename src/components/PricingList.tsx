
import PriceListingIcon from "./PriceListingIcon";

const PricingList = () => {
  return (
    <div className="bg-[#93c5fd] dark:bg-black py-24">
      <div className="relative  mx-auto ">
        <div className="relative isolate bg-transparent px-6 py-0 sm:py-10 lg:px-8">
         
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h1 className="__className_b3f6a0 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              What do we offer? <br />
              <span className="relative bg-clip-text text-transparent bg-gradient-to-t from-violet-600 to-violet-600/[0.8] z-10 dark:text-white"></span>
            </h1>
          </div>
          <p className="mx-auto mt-6 mb-20 max-w-lg text-center text-lg leading-8 text-gray-600 dark:text-gray-200">
            Not sure which one is right for you? Don't worry, we've got you
            covered
          </p>
          <div className="mx-auto  grid max-w-[83rem] grid-cols-1 gap-4 items-center  md:grid-cols-3 xl:grid-cols-3">
            <div className="dark:bg-white/5 dark:border-white/[0.2] bg-white  rounded-3xl px-6 py-8 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent  flex flex-col justify-between h-full">
              <div className="">
                <h3
                  id="tier-free"
                  className="text-violet-600 text-base font-semibold leading-7"
                >
                  #1
                </h3>
                <p className="mt-4 gap-x-2">
                  <span className="dark:text-white text-gray-400 text-sm block h-6 dark:text-white">
                    {" "}
                  </span>
                  <span className="text-gray-900 text-4xl font-bold tracking-tight dark:text-white">
                    Online Masterclass
                  </span>
                </p>
                <p className="text-gray-600 mt-6 text-sm leading-7 dark:text-neutral-200 h-24 md:h-32 xl:h-24">
                  Invest 45 minutes to learn how to “Grow your Brand via Content
                  Creation on LinkedIn”.
                </p>
                <ul
                  role="list"
                  className="text-gray-600 mt-8 space-y-3 text-sm leading-6 sm:mt-10 dark:text-neutral-100"
                >
                  <li className="flex gap-x-3">
                    <PriceListingIcon></PriceListingIcon>
                    Audience Persona Design
                  </li>
                  <li className="flex gap-x-3">
                    <PriceListingIcon></PriceListingIcon>
                    Best Practices
                  </li>
                  <li className="flex gap-x-3">
                    <PriceListingIcon></PriceListingIcon>
                    Self-Serve Excel Manager
                  </li>
                </ul>
              </div>
              <div>
                <button
                  aria-describedby="tier-free"
                  className="text-violet-600 ring-1 ring-inset ring-violet-500 hover:ring-violet-600 focus-visible:outline-violet-600 mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full"
                >
                  Contact Now
                </button>
                <button className="text-xs text-neutral-500 mt-2 text-left">
                  Questions?
                </button>
              </div>
            </div>
            <div className="dark:bg-white/5 dark:border-white/[0.2] bg-white  rounded-3xl px-6 py-8 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent flex flex-col justify-between h-full">
              <div className="">
                <h3
                  id="tier-components-page"
                  className="text-violet-600 text-base font-semibold leading-7"
                >
                  #2
                </h3>
                <p className="mt-4 gap-x-2">
                  <span className="dark:text-white text-gray-400 text-sm block h-6 dark:text-white">
                    {" "}
                  </span>
                  <span className="text-gray-900 text-4xl font-bold tracking-tight dark:text-white">
                    Compact Bootcamp
                  </span>
                </p>
                <p className="text-gray-600 mt-6 text-sm leading-7 dark:text-neutral-200 h-24 md:h-32 xl:h-24">
                  Create your personal content strategy in 1 hour; get your
                  content reviewed; and learn the best practices.
                </p>
                <ul
                  role="list"
                  className="text-gray-600 mt-8 space-y-3 text-sm leading-6 sm:mt-10 dark:text-neutral-100"
                >
                  <li className="flex gap-x-3">
                    <PriceListingIcon></PriceListingIcon>
                    Audience Persona Design
                  </li>
                  <li className="flex gap-x-3">
                    <PriceListingIcon></PriceListingIcon>
                    Best Practices
                  </li>
                  <li className="flex gap-x-3">
                    <PriceListingIcon></PriceListingIcon>
                    Self-Serve Excel Manager
                  </li>
                  <li className="flex gap-x-3">
                    <PriceListingIcon></PriceListingIcon>
                    Personal Strategy Call (1 hour)
                  </li>
                </ul>
              </div>
              <div>
                <button
                  aria-describedby="tier-components-page"
                  className="text-violet-600 ring-1 ring-inset ring-violet-500 hover:ring-violet-600 focus-visible:outline-violet-600 mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full"
                >
                  Contact Now
                </button>
                <button className="text-xs text-neutral-500 mt-2 text-left">
                  Questions?
                </button>
              </div>
            </div>
            <div className="relative bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)]  shadow-2xl rounded-3xl px-6 py-8 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent  flex flex-col justify-between h-full">
              <div className="">
                <h3
                  id="tier-pages-page"
                  className="text-violet-400 text-base font-semibold leading-7"
                >
                  #3
                </h3>
                <p className="mt-4 gap-x-2">
                  <span className="text-gray-400 dark:text-white text-sm block h-6 dark:text-white"></span>
                  <span className="text-white text-4xl font-bold tracking-tight dark:text-white">
                    3 Month Program
                  </span>
                </p>
                <p className="text-gray-300 mt-6 text-sm leading-7 dark:text-neutral-200  md:h-32 xl:h-24">
                  A 3-month incubator-style program, where participants will be
                  able to build their distinct personal brand, grow their
                  audience, increase their average engagement rate and also get
                  relevant opportunities as a result.
                </p>
                <ul
                  role="list"
                  className="text-gray-300 mt-8 space-y-3 text-sm leading-6 sm:mt-10 dark:text-neutral-100"
                >
                  <li className="flex gap-x-3">
                    <PriceListingIcon></PriceListingIcon>
                    Audience Persona Design
                  </li>
                  <li className="flex gap-x-3">
                    <PriceListingIcon></PriceListingIcon>
                    Best Practices
                  </li>
                  <li className="flex gap-x-3">
                    <PriceListingIcon></PriceListingIcon>
                    Self-Serve Excel Manager
                  </li>
                  <li className="flex gap-x-3">
                    <PriceListingIcon></PriceListingIcon>
                    Personal Strategy Call (1 hour)
                  </li>
                  <li className="flex gap-x-3">
                    <PriceListingIcon></PriceListingIcon>
                    Continuous 1:1 Check-Ins
                  </li>
                  <li className="flex gap-x-3">
                    <PriceListingIcon></PriceListingIcon>
                    Post Idea Dashboard
                  </li>
                  <li className="flex gap-x-3">
                    <PriceListingIcon></PriceListingIcon>
                    Community Access
                  </li>
                </ul>
              </div>
              <div>
                <button
                  aria-describedby="tier-pages-page"
                  className="bg-violet-500 text-white shadow-sm hover:bg-violet-400 focus-visible:outline-violet-500 mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full"
                >
                  Contact Now
                </button>
                <button className="text-xs mt-2 text-left text-neutral-200">
                  Questions?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingList;

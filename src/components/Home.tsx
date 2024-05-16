
const Home = () => {
  return (
   
      <div className="relative pt-[100px]  md:pt-[80px]  mx-auto  py-24  ">
        <div className="relative isolate bg-transparent px-6 py-0 sm:py-10 lg:px-8">
          
          <div className="mx-auto  flex max-w-[83rem] grid-cols-1 gap-4 items-center  flex-col  md:flex-row xl:flex-row">
            <div className="flex flex-col items-start xl:px-0 md:px-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 relative text-left dark:text-zinc-100 text-zinc-700 max-w-4xl !leading-none __className_b3f6a0">
                <span
                  data-br=":r3d:"
                  data-brr={1}
                  style={{
                    display: "inline-block",
                    verticalAlign: "top",
                    textDecoration: "inherit",
                    textWrap: "balance",
                  }}
                >
                  Make your voice heard on{" "}
                  <span className="jerseyFont text-violet-600">LinkedIn</span>
                  <div
                    className=" z-10 inline-block relative"
                    style={{ opacity: 1, transform: "none" }}
                  ></div>
                </span>
              </h1>
              <h2 className="relative font-regular text-sm sm:text-xl text-zinc-500 tracking-wide mb-8 text-left max-w-2xl antialiased leading-loose __className_b15a0a">
                Copy paste the most trending components and use them in your
                websites without having to worry about styling and animations.
              </h2>
              <div className="flex sm:flex-row flex-col space-y-2 justify-center sm:space-y-0 sm:space-x-4 sm:justify-start mb-4 w-full">
                <a
                  className="w-full sm:w-52 text-sm text-white   h-14 border border-transparent  dark:text-white dark:border-white flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] !bg-violet-500 !hover:bg-violet-600"
                  href="#"
                >
                  What Do We Offer
                </a>
              </div>
            </div>
            <div className="flex justify-end">
              <video
                playsInline
                controls
                className="overflow-hidden rounded-3xl border-2 border-violet-500"
                src={
                  "https://video.wixstatic.com/video/7c3b09_bd25245181d74ce09d5140101ea013d4/720p/mp4/file.mp4"
                }
                autoPlay
              />
            </div>
          </div>
        </div>
      </div>

  );
};

export default Home;

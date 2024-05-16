import  { useEffect, useState } from "react";
import Logo from "../assets/Logo.webp";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setHasScrolled(offset > 50); // Set true if scrolled more than 50px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed   z-40  w-full   transition-all duration-200  ${
        hasScrolled ? "backdrop-blur-xl" : ""
      }`}
    >
      <nav className=" mx-auto   max-w-[83rem]  flex items-center    justify-between w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-50% center-elment  ">
        <a className="" href="/">
          <img src={Logo} className=" w-[100px]"></img>
        </a>
        <div className="hidden lg:flex navButton items-center  text-white  gap-3 !cursor-default">
          <a href="#cirriculum" className="navItem px-4">
            Home
          </a>
          <a className="navItem px-4" href="/mentorship">
            Services
          </a>
        </div>
        <div
          className="navButton hidden lg:block   !bg-primary font-semibold  text-white"
          style={{ transform: "none" }}
        >
          <a>Login with Google</a>
        </div>
        {/* <div className="flex gap-3 lg:hidden">
          <button className="navSmallScreenButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              color="#DEE3EA"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              <path
                fill="#DEE3EA"
                d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"
              />
            </svg>
          </button>
          <button className="navSmallScreenButton">
            <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/3 transform ">
              <span
                aria-hidden="true"
                className="absolute block h-[1.5px] w-5 transform bg-gray-50 transition duration-300 ease-in-out -translate-y-[7px]"
              />
              <span
                aria-hidden="true"
                className="absolute block h-[1.5px] w-5 transform bg-gray-50 transition duration-300 ease-in-out opacity-100"
              />
              <span
                aria-hidden="true"
                className="absolute block h-[1.5px] w-5 transform bg-gray-50 transition duration-300 ease-in-out translate-y-[7px]"
              />
            </div>
          </button>
        </div> */}
      </nav>
      {/* <div className="transform  -translate-x-[200%] duration-300  center-elment bg-backgroundColor  border-[#1E1E1E]  border-t-[1px]   w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-50%   py-4 lg:hidden">
        <a href="#cirriculum" className="mb-2 text-[18px] cursor-pointer">
          Cirriculum
        </a>
        <br />
        <a href="#events" className="mb-2 text-[18px] cursor-pointer">
          Mentorship
        </a>
        <br />
        <a href="#mentorship" className="mb-2 text-[18px] cursor-pointer">
          Events
        </a>
        <br />
        <a className="mb-2 !text-[18px] cursor-pointer" href="/aboutUs">
          About Us
        </a>
      </div> */}
    </header>
  );
};

export default Header;

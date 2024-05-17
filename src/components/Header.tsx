import { useEffect, useState } from "react";
import Logo from "../assets/Logo.webp";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState<Boolean>(false);

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
          <a href="#homeOne" className="navItem px-4 cursor-pointer">
            Home
          </a>
          <div className="navItem  px-4 group ">
            <p className="!py-[0.5rem] cursor-pointer">Services</p>
            <div className="absolute  hidden group-hover:block hover:block p-2 ">
              <div className="bg-[#1f2937] dark:bg-white ">
                <a
                  href="#pricing"
                  className="block text-white dark:text-violet-600 cursor-pointer p-2 px-4 hover:bg-violet-600 hover:text-white  transition duration-500 ease-in-out"
                >
                  Online Masterclass
                </a>
                <a
                  href="#pricing"
                  className="block text-white dark:text-violet-600 cursor-pointer p-2 px-4 hover:bg-violet-600 hover:text-white transition duration-500 ease-in-out"
                >
                  Compact Bootcamp
                </a>
                <a
                  href="#pricing"
                  className="block text-white dark:text-violet-600 cursor-pointer p-2 px-4  hover:bg-violet-600 hover:text-white transition duration-500 ease-in-out"
                >
                  3 Month Program
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="navButton hidden lg:block  !py-[0.5rem]  !bg-primary font-semibold  text-white"
          style={{ transform: "none" }}
        >
          <a>Login with Google</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

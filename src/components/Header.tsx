import { useEffect, useState } from "react";
import Logo from "../assets/Logo.webp";
import { useGoogleLogin } from "@react-oauth/google";
import { useAuth } from "./AuthProvider";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState<Boolean>(false);
  const [color, setColor] = useState("red-500");
  const context = useAuth();
  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      console.log("response is ", response);
      const userInfo = await fetchGoogleUserInfo(response.access_token);
      console.log("User Info:", userInfo);
      context?.login(userInfo);

      // Now you have user info such as `userInfo.name`, `userInfo.picture`, etc.
    },
    onError: (error) => console.error(error),
    scope: "https://www.googleapis.com/auth/userinfo.profile",
  });

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setHasScrolled(offset > 50); // Set true if scrolled more than 50px
    };

    window.addEventListener("scroll", handleScroll);
    setColor(generateDarkColor());

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const generateDarkColor = () => {
    // Generate each color component in a range that results in dark colors
    const red = Math.floor(Math.random() * 100); // Values between 0 and 99
    const green = Math.floor(Math.random() * 100); // Values between 0 and 99
    const blue = Math.floor(Math.random() * 100); // Values between 0 and 99

    // Convert to hexadecimal string
    const toHex = (c: number) => {
      const hex = c.toString(16);
      return hex.length === 1 ? `0${hex}` : hex;
    };

    // Construct full hex color string
    return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
  };

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
        <div className="hidden lg:flex bg-[#1f2937] px-[1rem] rounded-[200px] items-center  text-white  gap-3 !cursor-default">
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
        {context?.user ? (
          <div className="flex gap-2 items-center ">
            <a
              href="/dashboard"
              className="px-[1rem] cursor-pointer   rounded-[200px] !py-[0.5rem]  !bg-primary font-semibold  text-white !bg-violet-600"
            >
              <p>DashBoard</p>
            </a>
            {/* <img
              className="h-[2rem] w-[2rem] rounded-[100px]"
              src={context?.user.picture}
            ></img> */}
            {/* <p>{generateRandomColor()}</p> */}
            <div
              className={`bg-[${color}] h-10 w-10 flex  justify-center items-center rounded-md cursor-pointer`}
            >
              <p className="text-[20px]">{context?.user.name[0]}</p>
            </div>
          </div>
        ) : (
          <div
            className="navButton  !py-[0.5rem]  !bg-primary font-semibold  text-white"
            style={{ transform: "none" }}
            onClick={() => {
              googleLogin();
            }}
          >
            <p>Login with Google</p>
          </div>
        )}
      </nav>
      {/* <GoogleLogin
        onSuccess={async (credentialResponse: any) => {
          console.log(credentialResponse);
          console.log(credentialResponse?.credential);
          const userInfo = await fetchGoogleUserInfo(
            credentialResponse?.credential
          );
          console.log("User Info:", userInfo);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        useOneTap
        // className="navButton hidden lg:block  !py-[0.5rem]  !bg-primary font-semibold  text-white"
      /> */}
    </header>
  );
};

export default Header;

export const fetchGoogleUserInfo = async (accessToken: any) => {
  localStorage.setItem("access_token", accessToken);
  const response = await fetch(
    "https://www.googleapis.com/oauth2/v2/userinfo",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch user info");
  }
  const userInfo = await response.json();
  return userInfo;
};

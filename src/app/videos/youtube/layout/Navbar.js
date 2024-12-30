
import { ArrowLeft, Menu, Mic, MoonStar, Search, Sun } from "lucide-react";
import Logo from "../assets/logo.png";
import UserImg from "../assets/user.jpg";
import { useState } from "react";

const Navbar = ({ toggleSidebar }) => {
  // State for dark mode and search box visibility
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isShowSearchBox, setIsShowSearchBox] = useState(false);

  // Toggles the search box visibility
  const toggleSearchBox = () => {
    setIsShowSearchBox(!isShowSearchBox);
  };

  // Toggles dark mode and updates the document body class
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-neutral-900">
      <nav className="py-2 pb-5 px-4 max-md:px-3 flex items-center justify-between">
        {/* <HeaderLeftSection
          toggleSidebar={toggleSidebar}
          isShowSearchBox={isShowSearchBox}
        /> */}
        <div
          className={`flex gap-3 h-10 flex-grow max-w-[600px] max-lg:max-w-[400px] ${isShowSearchBox && "max-md:max-w-full"}`}
        >
          <button
            onClick={toggleSearchBox}
            className={`p-2 mr-3 h-full w-10 rounded-full bg-neutral-100 md:hidden ${!isShowSearchBox && "max-md:hidden"} hover:bg-neutral-200 dark:bg-neutral-800 dark:border-neutral-500 hover:dark:bg-neutral-700`}
          >
            <ArrowLeft className="dark:text-neutral-400" />
          </button>
          <div className={`flex w-full ${!isShowSearchBox && "max-md:hidden"}`}>
           
          </div>
        
        </div>
        <div
          className={`flex items-center gap-4 ${isShowSearchBox && "max-md:hidden"}`}
        >
          <button
            onClick={toggleSearchBox}
            className={`p-2 md:hidden rounded-full hover:bg-neutral-200 dark:border-neutral-500 hover:dark:bg-neutral-700`}
          >
            <Search className="dark:text-neutral-400" />
          </button>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-neutral-200 dark:border-neutral-500 hover:dark:bg-neutral-700"
          >
            {isDarkMode ? (
              <Sun className="dark:text-neutral-400" />
            ) : (
              <MoonStar className="dark:text-neutral-400" />
            )}
          </button>
          <button>
            <img
              className="w-8 h-8 rounded-full"
              src={UserImg}
              alt="User Image"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

// Component for the menu toggler and logo
export const HeaderLeftSection = ({ toggleSidebar, isShowSearchBox }) => {
  return (
    <div
      className={`flex gap-4 items-center ${isShowSearchBox && "max-md:hidden"}`}
    >
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-full hover:bg-neutral-200 hover:dark:bg-neutral-700"
      >
        <Menu className="dark:text-neutral-400" />
      </button>
     
    </div>
  );
};

export default Navbar;
import React, { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { Themecontext } from "../Context/Themcontext";

function Header() {
  const { theme, setTheme } = useContext(Themecontext);
  useEffect(() => {}, []);
  return (
    <div className="flex items-center p-3">
      <img
        src="/src/assets/images/logo.jpg"
        alt="Logo"
        width={60}
        height={60}
      />
      <div className="flex bg-slate-300 p-2 w-full items-center mx-5 rounded-full">
        <FaSearch className="" />
        <input
          type="text"
          className="px-2 bg-transparent outline-none "
          placeholder="Search..."
        />
      </div>
      <div>
        {theme == "light" ? (
          <BsMoonStarsFill
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <BsSun
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Header;

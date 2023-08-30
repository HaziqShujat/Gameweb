import React from "react";

function Trendinggames({ gamelist }) {
  return (
    <div className="mt-5 hidden md:block">
<h2 className="font-bold text-[30px] dark:text-white"> Trending Games</h2>
    <div className="   md:grid mt-4  md:grid-cols-3 gap-3 lg:grid-cols-4">
      {gamelist.map(
        (item, index) =>
          index < 4 && (
            <div key={index} className="bg-slate-600 rounded-lg group hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              <img src={item.background_image} 
              className="h-[270px] rounded-t-lg object-cover"
              />
              <h2 className="dark:text-white text-[20px] p-2 font-bold"> {item.name} </h2>
            </div>
          )
      )}
    </div>
    </div>
  );
}

export default Trendinggames;

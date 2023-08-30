import React, { useEffect, useState } from "react";
import Globelapi from "../Services/Globelapi";

function Genrelist({setGenreid}) {
  const [genrelist, setGenrelist] = useState([]);
  const [activeindex, setActiveindex] = useState(0);
  useEffect(() => {
    getGenrelist();
  }, []);

  const getGenrelist = () => {
    Globelapi.getGenreApi()
      .then((resp) => {
        setGenrelist(resp.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1 className="text-[30px] font-bold dark:text-white">Genre</h1>
      {genrelist.map((item, index) => (
        <div
          key={index}
          onClick={() =>{ setActiveindex(index); setGenreid(item.id)}}
          className={`flex  gap-2 items-center mb-2 cursor-pointer hover:bg-slate-300 p-2 group  rounded-lg hover:dark:bg-slate-500 ${
            activeindex == index ? "bg-slate-300 dark:dark:bg-slate-500" : null
          }`}
        >
          <img
            src={item.image_background}
            className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-100 transition-all ease-out duration-300 ${
              activeindex == index
                ? "bg-slate-300 dark:dark:bg-slate-500"
                : null
            }`}
          />
          <h3
            className={`dark:text-white font-medium group-hover:font-bold transition-all ease-out duration-300 ${
              activeindex == index ? "font-bold" : null
            }`}
          >
            {" "}
            {item.name}{" "}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Genrelist;

import React from "react";
import { FaStar, FaComment } from 'react-icons/fa';
import { FaLightbulb } from 'react-icons/fa';

function Gamesbyid({ gamesbyid }) {
  return (
    <div>
<h2 className="font-bold text-[30px] dark:text-white gap-6 mt-5">Popular Games</h2>
    <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mt-5">
      {gamesbyid.map((item, index) => index <18 &&  (
        <div key={index} className="bg-slate-600 p-3 rounded-lg hover:scale-105 transition-all ease-in-out duration-100  cursor-pointer ">
          <img src={item.background_image}  className="w-full h-[80%] rounded-xl object-cover"/>
          <h2 className="dark:text-white font-bold mt-1 ">
            {" "}
            {item.name} <span className="p1 rounded-sm ml-2 text=[10px] bg-green-100 text-green-700 font-medium"> {item.metacritic} </span>{" "}
          </h2>
          <h2 className="dark:text-white mb-1 ">
          <FaStar className="text-yellow-500 mr-1 inline" />
        {item.rating} 
        <FaComment className="text-blue-500 ml-2 mr-1 inline" />
        {item.reviews_count}  <FaLightbulb className="text-yellow-500  ml-2 mr-1 inline" />
        {item.suggestions_count}
      </h2>
      <h2>
       
      </h2>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Gamesbyid;

import React from 'react';

function Banner({ gamebanner }) {
  
  const randomImage = gamebanner.background_image;
  console.log(gamebanner)

  return (
    <div className='relative mt-4 p-4'>
      <div className='absolute bottom-0 p-5 bg-gradient-to-r from-slate-900 to-transparent w-full'>
        <h1 className='text-[24px] text-white font-bold'>{gamebanner.name}</h1>
        <button className='bg-blue-700 text-white px-2 py-2 rounded-xl'>GET now</button>
      </div>
      <img
        src={randomImage}
        alt='Background'
        className='md:h-[320px] w-full object-cover rounded-xl'
      />
    </div>
  );
}

export default Banner;

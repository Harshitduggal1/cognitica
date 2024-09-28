import React from 'react';

const Logo = () => {
  return (
    <div className="relative flex items-center">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 439.4 110.2"
        className="fill-current text-black cursor-pointer h-[28px] lg:h-[32px]"
      >
        <g>
          <path d="M101.7,51.8H15.3c-2.2,0-4-1.8-4-4v-6.1c0-6.9,5.6-12.5,12.5-12.5h69.3c6.9,0,12.5,5.6,12.5,12.5v6.1C105.7,50,103.9,51.8,101.7,51.8z"></path>
          <path d="M83.5,22.6h-50c-2.2,0-4.1-1.8-4.1-4.1C29.4,8.3,37.7,0,47.9,0h21.2c10.2,0,18.5,8.3,18.5,18.5C87.6,20.8,85.8,22.6,83.5,22.6z"></path>
          <path d="M105.7,58.4H11.3c-6.2,0-11.3,5.1-11.3,11.3s5.1,11.3,11.3,11.3h33.5c1.2-6.4,6.8-11.3,13.6-11.3s12.4,4.9,13.6,11.3h33.5c6.2,0,11.3-5.1,11.3-11.3S111.9,58.4,105.7,58.4z"></path>
          <path d="M101.6,87.6H72.3v22.6h22c6.2,0,11.3-5.1,11.3-11.3v-7.2C105.7,89.5,103.9,87.6,101.6,87.6z"></path>
          <path d="M15.3,87.6c-2.2,0-4.1,1.8-4.1,4.1v7.2c0,6.2,5.1,11.3,11.3,11.3h22V87.6H15.3z"></path>
        </g>
      </svg>
      <h5 className="absolute right-[-25px] xl:right-[-20px] pt-1 font-medium text-2xl">
        BeeClone
      </h5>
    </div>
  );
};

export default Logo;

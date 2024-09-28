"use client"

import { PartnersTypes, partners } from '../../../lib/constants';

import Image from "next/image";
import Marquee from "react-fast-marquee";

const Branding = () => {
  return (
    <div className="border-t border-b border-[#000] py-10 relative">
      <svg xmlns="http://www.w3.org/2000/svg" width="204" height="192" fill="none" className="z-10 absolute -top-[6rem] md:block -right-36 md:right-20">
        <path fill="#3843D0" stroke="#0B0D2A" strokeWidth="2" d="M112.333 70.02v2.309l1.685-1.58 44.763-41.993c4.042-3.792 10.618-3.792 14.66 0 4.005 3.757 4.005 9.82 0 13.577l-44.764 41.993-1.844 1.73h65.834c5.768 0 10.333 4.371 10.333 9.632 0 5.26-4.565 9.632-10.333 9.632h-65.833l1.843 1.729 44.764 41.993c4.005 3.757 4.005 9.821 0 13.578-4.042 3.791-10.618 3.791-14.66 0l-44.764-41.994-1.684-1.58v61.697c0 5.261-4.565 9.632-10.333 9.632s-10.333-4.371-10.333-9.632v-61.697l-1.684 1.58-44.764 41.994c-4.041 3.791-10.619 3.791-14.66 0-4.005-3.757-4.005-9.821 0-13.578l44.764-41.993 1.844-1.729H11.332C5.565 105.32 1 100.948 1 95.688s4.565-9.632 10.333-9.632h65.834l-1.844-1.73L30.56 42.333c-4.005-3.757-4.005-9.82 0-13.577 4.041-3.792 10.619-3.792 14.66 0l44.764 41.993 1.684 1.58V10.632C91.667 5.372 96.232 1 102 1s10.333 4.372 10.333 9.632V70.02Z"></path>
      </svg>
      <h3 className="uppercase text-xl md:text-2xl text-center max-w-3xl mx-auto font-semibold z-20 relative mt-5">
        CREATED BY THE EARLY MORNING BREW TEAM
      </h3>
      <div className="w-full text-center pt-1">
        <h3 className="uppercase bg-blue-700 rounded p-2 text-xl md:text-2xl text-center inline-block font-[600] z-20 relative">
          NOW POWERING THE WORLD&apos;S TOP NEWSLETTERS
        </h3>
      </div>
      <Marquee className="w-full flex justify-around">
        {partners.map((i: PartnersTypes, index: number) => (
          <>
            <Image
              src={i.url}
              key={index}
              width={200}
              height={200}
              alt="partner"
              className={`md:mx-8 w-[120px] md:w-[130px] mx-3`}
            />
          </>
        ))}
      </Marquee>
      <Marquee className="w-full flex justify-around -mt-5" direction="right">
        {partners.map((i: PartnersTypes, index: number) => (
          <>
            <Image
              src={i.url}
              key={index}
              width={200}
              height={200}
              alt="partner"
              className={`md:mx-8 w-[120px] md:w-[130px] mx-3`}
            />
          </>
        ))}
      </Marquee>
    </div>
  );
};

export default Branding;

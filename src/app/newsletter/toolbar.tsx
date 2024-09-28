"use client";

import { useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";


const Toolbar = () => {
  const { user } = useUser();

  return (
    <>
      {!user && (
        <Link className="mr-2 hidden md:inline-block" href={"/sign-in"}>Login</Link>
      )}
      <Link href="/dashboard">
        <Button className="flex justify-center items-center gap-2 bg-[#3843D0] text-white border-[#3843D0] border-2 rounded-[10px] py-[1.3rem] px-4 text-sm md:py-5 md:px-7 md:text-[1rem] hover:bg-[#060419]">
          Start Trial
        </Button>
      </Link>
      {user && (
        <Link href="/dashboard">
          <div className="md:inline-block cursor-pointer mt-1 hidden">
            <Image
              src={user.imageUrl || '/default-avatar.png'}
              alt="User Profile"
              width={45}
              height={45}
              className="rounded-full object-cover"
              style={{ aspectRatio: '1 / 1' }}
            />
          </div>
        </Link>
      )}
    </>
  );
};

export default Toolbar;

import React from "react";
import Receipt from "../components/Receipt";
import Image from "next/image";

const receipt = () => {
  return (
    <div className="flex flex-col justify-start bg-white mx-auto items-center ">
      <Image src="/logo.jpeg " className="m-1" height={100} width={100} />
      <Receipt />
    </div>
  );
};

export default receipt;

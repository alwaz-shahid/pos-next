import React from "react";
import Receipt from "../components/Receipt";
import Image from "next/image";

const receipt = () => {
  return (
    <div className="flex flex-col justify-start py-2 bg-white mx-auto items-center ">
      <h1 className="text-2xl italic pt-1 pb-2"> PICANTE PK</h1>
      <Receipt />
      <div className="border-t border-gray-500 mt-2">
        <p className="w-2/3 mx-auto p-2 text-sm">
          Thank you for choosing Picante. We hope you enjoy your meal.
        </p>
        <p className="w-2/3 mx-auto p-2 text-sm">
          MicroWave for 10 seconds, for delivery orders
        </p>
      </div>
    </div>
  );
};

export default receipt;

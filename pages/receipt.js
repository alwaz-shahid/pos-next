import React from "react";
import Receipt from "../components/Receipt";
import useStore from "../store";

const receipt = () => {
  const orders = useStore((state) => state.orders);
  const resetCart = useStore((state) => state.resetCart);
  return (
    <div className="flex flex-col justify-start mx-auto items-center ">
      <h1 className="text-xl font-semibold  pb-2 text-center">Picante PK</h1>
      <Receipt />
    </div>
  );
};

export default receipt;

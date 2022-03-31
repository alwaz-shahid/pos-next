import React, { useEffect, useState } from "react";
import Cinput from "../../utils/Cinput";
import { useForm, useWatch } from "react-hook-form";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useStore from "../../store";
import Link from "next/link";
import { pdata } from "../../lib/productData";
import _ from "lodash";
import Receipt from "../Receipt";

// function ChildWatch({ control }) {
//   const productID = useWatch({
//     control,
//     name: "pid",
//   });

//   return <p>Watch: {productID}</p>;
// }

const MakeMenu = () => {
  // const router = useRouter();

  const { handleSubmit, register, reset, control } = useForm();

  const addOrder = useStore((state) => state.addOrders);
  const resetC = useStore((state) => state.resetCart);

  const onSubmit = (data) => {
    // e.preventDefault();
    // alert(JSON.stringify(data, null, 2));
    addOrder(data);
    if (data.pid == "0000") {
      resetC();
    }
    reset();
  };
  useEffect(() => {}, [onSubmit, reset, addOrder]);
  return (
    <div className="border-2  shadow-inner bg-slate-100 px-5 py-2 f-col">
      <div className="flex justify-between px-2 divide-y-2">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <Cinput name="pid" register={register} />
          <Cinput name="name" register={register} />
          <Cinput name="price" register={register} />
          <Cinput name="discount" register={register} />
          <Cinput name="qty" register={register} />
          <Button mt={4} colorScheme="yellow" w="full" type="submit">
            Add
          </Button>
          <Link href="/receipt">
            <Button mt={4} colorScheme="blue">
              <a className="p-4 hover:underline font-semibold">Print Recepit</a>
            </Button>
          </Link>
        </form>

        <div className="pl-2 flex">
          <Receipt />
        </div>
      </div>
      {/* {JSON.stringify(pdata, null, 2)} */}
    </div>
  );
};

export default MakeMenu;

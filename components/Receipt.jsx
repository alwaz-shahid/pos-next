import React, { useEffect } from "react";
import useStore from "../store";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import Cinput from "../utils/Cinput";

const Receipt = () => {
  useEffect(() => {});
  const orders = useStore((state) => state.orders);
  const resetCart = useStore((state) => state.resetCart);
  //   const { handleSubmit, register } = useForm();
  const addOrder = useStore((state) => state.addOrders);
  //   const onSubmit = (data) => {
  //     // e.preventDefault();
  //     alert(JSON.stringify(data, null, 2));
  //     addOrder(data);
  //     if (data.pid == "00") {
  //       resetCart();
  //     }
  //   };
  return (
    <div className=" min-w-full">
      {/* <form className="w-1/2" onSubmit={handleSubmit(onSubmit)}>
        <Cinput name="pid" register={register} />
        <Cinput name="name" register={register} />
        <Cinput name="price" register={register} />
        <Cinput name="discount" register={register} />
        <Cinput name="qty" register={register} />
        <Button mt={4} colorScheme="red" type="submit">
          Submit
        </Button>
      </form> */}
      <table class="mx-auto table-auto">
        <thead>
          <tr className="">
            <th className="p-2">PID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Price</th>
            <th className="p-2">Qty</th>
            <th className="p-2">Discount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={i}>
              <td className="pb-1 border-b-1"> {order?.pid}</td>
              <td className="pb-1 border-b-1">{order?.name}</td>
              <td className="pb-1 border-b-1">{order?.price}</td>
              <td className="pb-1 border-b-1">{order?.qty}</td>
              <td className="pb-1 border-b-1">{order?.discount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Receipt;

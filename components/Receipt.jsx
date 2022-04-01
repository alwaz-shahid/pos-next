import React, { useEffect, useState } from "react";
import { grandTotal } from "../lib/billUtils";
import useStore from "../store";
import dayjs from "dayjs";
import { Input } from "@chakra-ui/react";

const Receipt = () => {
  const [editing, setEditing] = useState(false);
  let now = dayjs();
  const nowTime = now.format("h:mm a");
  const nowDate = now.format("MMMM D YYYY");
  const orders = useStore((state) => state.orders);
  const resetCart = useStore((state) => state.resetCart);

  const [data, setData] = useState(orders);
  const addOrder = useStore((state) => state.addOrders);
  const storeReceipt = useStore((state) => state.receipt);
  let final_p = grandTotal(storeReceipt);

  const updateFieldChanged = (index) => (e) => {
    alert("index: " + index);
    alert("property name: " + e.target.name);
    alert("property value: " + e.target.value);

    let newArr = [...data]; // copying the old datas array
    newArr[index] = e.target.value; // replace e.target.value with whatever you want to change it to
    setData(newArr);
  };
  const updateEdit = () => {
    setEditing(true);
  };
  useEffect(() => {}, [
    orders,
    resetCart,
    addOrder,
    final_p,
    editing,
    updateFieldChanged,
    updateEdit,
  ]);
  return (
    <div className="w-80 font-normal max-w-max min-w-fit overflow-hidden f-col text-black">
      <table className="mx-auto table-auto text-sm" onClick={updateEdit}>
        <thead>
          <tr className="font-normal">
            <th className="m-2 underline">#</th>
            <th className="m-2 px-2"> Name </th>
            <th className="m-2 px-2">Qty </th>
            <th className="m-2 px-2">Discount</th>
            <th className="m-2 px-2">Price (PKR)</th>
            <th className="m-2 px-2">Total </th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, i) => (
            <tr key={i}>
              <td className="mb-1"> {i}</td>
              <td className="mb-1 ">{order?.name}</td>
              <td className="mb-1">{order?.price.toFixed(2)}</td>
              <td className="mb-1">{order?.qty}</td>
              <td className="mb-1">{order?.discounted_price.toFixed(2)}</td>
              <td className="mb-1">{order?.final_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className=" p-1 min-w-full font-light text-sm">
        <div className="flex justify-between border-t border-b p-1 border-black">
          <p>Grand Total :</p>
          <p className="font-semibold">RS: {final_p.toFixed(2)}</p>
        </div>
        <hr />
        <div className="flex justify-between ">
          <p>Date :</p>
          <p>{nowDate}</p>
        </div>
        <div className="flex justify-between ">
          <p>Time :</p>
          <p>{nowTime}</p>
        </div>
        {editing && (
          <Input
            color={"blue.700"}
            colorScheme="orange"
            name="name"
            onChange={updateFieldChanged(0)}
          />
        )}
      </div>
    </div>
  );
};

export default Receipt;

import React, { useEffect } from "react";
import { grandTotal } from "../lib/billUtils";
import useStore from "../store";
import dayjs from "dayjs";

const Receipt = () => {
  let now = dayjs();
  const nowTime = now.format("h:mm a");
  const nowDate = now.format("MMMM D YYYY");
  const orders = useStore((state) => state.orders);
  const resetCart = useStore((state) => state.resetCart);

  const addOrder = useStore((state) => state.addOrders);
  const storeReceipt = useStore((state) => state.receipt);
  let final_p = grandTotal(storeReceipt);
  useEffect(() => {}, [orders, resetCart, addOrder, final_p]);
  return (
    <div className="w-80 font-normal max-w-max min-w-fit overflow-hidden f-col">
      <table className="mx-auto table-auto text-sm">
        <thead>
          <tr className="font-normal">
            {/* <th className="m-2 underline">PID |</th> */}
            <th className="m-2 px-2"> Name </th>
            <th className="m-2 px-2">Price (PKR)</th>
            <th className="m-2 px-2">Qty </th>
            <th className="m-2 px-2">Discount (15%)</th>
            <th className="m-2 px-2">Final </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={i}>
              {/* <td className="mb-1"> {order?.pid}</td> */}
              <td className="mb-1 ">{order?.name}</td>
              <td className="mb-1">{order?.price}</td>
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
          <p className="font-semibold">RS: {final_p}</p>
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
      </div>
    </div>
  );
};

export default Receipt;

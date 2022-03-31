import React, { useEffect } from "react";
import { grandTotal } from "../lib/billUtils";
import useStore from "../store";

const Receipt = () => {
  const orders = useStore((state) => state.orders);
  const resetCart = useStore((state) => state.resetCart);

  const addOrder = useStore((state) => state.addOrders);
  const storeReceipt = useStore((state) => state.receipt);
  let final_p = grandTotal(storeReceipt);
  useEffect(() => {}, [orders, resetCart, addOrder, final_p]);
  return (
    <div className="w-80 max-w-max min-w-fit overflow-hidden f-col">
      <table className="mx-auto table-auto text-sm">
        <thead>
          <tr className="font-normal">
            {/* <th className="m-2 underline">PID |</th> */}
            <th className="m-2 px-2 underline"> Name </th>
            <th className="m-2 px-2 underline">Price (PKR)</th>
            <th className="m-2 px-2 underline">Qty </th>
            <th className="m-2 px-2 underline">Discount (15%)</th>
            <th className="m-2 px-2 underline">Final </th>
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
      <div className="font-semibold p-1 min-w-full">
        <div className="flex justify-between border-t border-b p-1 border-black">
          <p>Total:</p>
          <p>{final_p}</p>
        </div>
      </div>
    </div>
  );
};

export default Receipt;

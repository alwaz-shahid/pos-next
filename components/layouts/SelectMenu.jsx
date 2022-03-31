import React, { useEffect } from "react";
import useStore from "../../store";
import { pdata } from "./../../lib/productData";
import _ from "lodash";
import { grandTotal } from "../../lib/billUtils";

const SelectMenu = () => {
  const addOrder = useStore((state) => state.addOrders);
  const storeReceipt = useStore((state) => state.receipt);
  const appendReceipt = useStore((state) => state.appendReceipt);

  const setItem = (pid, data = pdata) => {
    // let menuItem = _.filter(pdata, pid);
    // [pdata.pid, pid]
    let menuItem = _.filter(data, { pid: pid });
    // alert(JSON.stringify(menuItem[0], null, 2));
    addOrder(menuItem[0]);
    appendReceipt(menuItem[0].price);
  };
  let final_p = grandTotal(storeReceipt);
  useEffect(() => {}, [addOrder, storeReceipt, appendReceipt, setItem]);
  return (
    <div>
      {final_p}
      {storeReceipt.map((item) => (
        <p>{item}</p>
      ))}
      {pdata.map((item, k) => {
        return (
          <div key={k} className="flex flex-col">
            <p className="p-2 flex">
              {Object.keys(item).map((ikey, i) => (
                <div
                  onClick={() => setItem(item.pid)}
                  key={i}
                  className=" bg-blue-200 hover:bg-blue-400 text-lg text-gray-900 font-semibold"
                >
                  <p className="p-2">{ikey}</p>
                  <p className="p-2">{item[ikey]}</p>
                </div>
              ))}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SelectMenu;

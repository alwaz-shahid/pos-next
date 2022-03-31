// store/index.js
import create from "zustand";
import { pdata } from "./lib/productData";

const useStore = create((set) => ({
  menu: pdata,
  receipt: [],
  orders: [],
  appendReceipt: (data) => {
    set((state) => {
      return {
        ...state,
        receipt: [...state.receipt, data],
      };
    });
  },
  addOrders: (order) =>
    set((state) => ({
      orders: [...state.orders, order],
    })),
  removeOrder: (pid) =>
    set((state) => ({
      orders: state.orders.filter((order) => order.pid !== pid),
    })),
  resetCart: (order = {}) =>
    set((state) => ({
      orders: [order],
    })),
}));

export default useStore;

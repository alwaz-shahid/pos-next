// store/index.js
import create from "zustand";

const useStore = create((set) => ({
  orders: [],
  addOrders: (order) =>
    set((state) => ({
      orders: [...state.orders, order],
    })),
  removeOrder: (id) =>
    set((state) => ({
      orders: state.orders.filter((order) => order.pid !== id),
    })),
  resetCart: () =>
    set((state) => ({
      orders: [],
    })),
}));

export default useStore;

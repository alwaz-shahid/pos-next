export function dPrice(price, dis = 15) {
  return (price / 100) * dis;
}

export function nPrice(price, disPrice) {
  return price - disPrice;
}

export function getToal(price, qty) {
  return price * qty;
}

export const grandTotal = (...input) => {
  input.reduce((a, b) => a + b);
};

// Example
// grandTotal(1, 2, 3, 4);
//output
// 10;

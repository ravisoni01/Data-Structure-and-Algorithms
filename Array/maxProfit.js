// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// function maxProfit(prices) {
//   let minPrice = Infinity;
//   let maxProfit = 0;

//   for (let price of prices) {
//     if (price < minPrice) {
//       minPrice = price;
//     } else {
//       let potentialProfit = price - minPrice;

//       if (potentialProfit > maxProfit) {
//         maxProfit = potentialProfit;
//       }
//     }
//   }

//   return maxProfit;
// }
function maxProfit(prices) {
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    let profit = prices[i] - min;

    maxProfit = Math.max(maxProfit, profit);
    min = Math.min(min, prices[i]);
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

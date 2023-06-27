// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      let potentialProfit = price - minPrice;

      if (potentialProfit > maxProfit) {
        maxProfit = potentialProfit;
      }
    }
  }

  return maxProfit;
}

maxProfit([7, 1, 5, 3, 6, 4]);

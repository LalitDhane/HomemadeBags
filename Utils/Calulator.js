let calculateDiscountPercentage = (price, specialPrice) => {
  let discount = price - specialPrice;
  let discountPercentage = (discount / price) * 100;
  return discountPercentage;
};

module.exports = calculateDiscountPercentage;

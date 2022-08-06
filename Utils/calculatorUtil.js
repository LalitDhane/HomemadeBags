//Calculator class has basic method for calculating discount percentage.
class Calculator {
  static calculateDiscountPercentage(price, specialPrice) {
    let discount = price - specialPrice;
    let discountPercentage = (discount / price) * 100;
    return discountPercentage.toFixed();
  }
}

module.exports = Calculator;

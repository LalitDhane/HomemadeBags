const calculatorUtil = require("./calculatorUtil");

class ApiUtil {
  static getProductObject(req) {
    const discountPercentage = calculatorUtil.calculateDiscountPercentage(
      req.body.price,
      req.body.specialPrice
    );
    const productObject = {
      code: req.body.code,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      specialPrice: req.body.specialPrice,
      discountPercentage: discountPercentage,
      imagePath: req.body.imagePath,
    };
    return productObject;
  }
}

module.exports = ApiUtil;

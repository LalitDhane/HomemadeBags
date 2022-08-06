const calulatorUtil = require("./calulatorUtil");

class ApiUtil {
  static getProductObject(req) {
    const discountPercentage = calulatorUtil.calculateDiscountPercentage(
      req.body.price,
      req.body.specialPrice
    );
    const prodcutObject = {
      code: req.body.code,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      specialPrice: req.body.specialPrice,
      discountPercentage: discountPercentage,
      imagePath: req.body.imagePath,
    };
    return prodcutObject;
  }
}

module.exports = ApiUtil;

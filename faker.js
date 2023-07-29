import { faker } from "@faker-js/faker";
import fs from "fs";

function generateProducts() {
  let products = [];

  for (let id = 1; id <= 100; id++) {
    let name = faker.commerce.productName();
    let price = faker.commerce.price({
      min: 100,
      max: 2000,
      dec: 0,
    });
    let image = faker.image.urlLoremFlickr({ category: "city" });
    let discountedPrice = (0.8 * price).toFixed(1);
    let rating = Math.floor(Math.random() * 5) + 1;
    let numReviews = Math.floor(Math.random() * 50) + 1;
    let countInStock = Math.floor(Math.random() * 10) + 1;
    let priceRange =
      discountedPrice < 500
        ? "Under 500"
        : discountedPrice >= 500 && discountedPrice < 1000
        ? "500 to 1000"
        : "1000 to 2000";

    products.push({
      id,
      image,
      name,
      price,
      discountedPrice,
      rating,
      numReviews,
      countInStock,
      priceRange,
    });
  }

  return products;
}

let dataObj = generateProducts();

fs.writeFileSync("data.json", JSON.stringify(dataObj, null, "\t"));

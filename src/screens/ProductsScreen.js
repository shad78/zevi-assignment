import React, { useState, useEffect } from "react";
import products from "../products.js";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product.js";
import SearchFilters from "../components/SearchFilters.js";

export default function ProductsScreen() {
  const [priceFilters, setPriceFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      if (priceFilters.length === 0) {
        return true; // If no price filters are selected, show all products
      } else {
        return priceFilters.includes(product.priceRange); // Assuming there is a property called 'priceRange' in your product data
      }
    });

    setFilteredProducts(filteredProducts);
  }, [priceFilters]);

  return (
    <>
      <h3>Search Results</h3>
      <Row>
        <Col md="3">
          <SearchFilters
            priceFilters={priceFilters}
            setPriceFilters={setPriceFilters}
          />
        </Col>
        <Col md="9">
          <Row>
            {filteredProducts.map((product) => (
              <Col key={product._id} sm="12" md="6" lg="4" xl="3">
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
}

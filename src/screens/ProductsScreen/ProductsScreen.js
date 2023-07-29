import React, { useState, useEffect } from "react";
import products from "../../products.js";
import { Row, Col } from "react-bootstrap";
import Product from "../../components/Product/Product.js";
import SearchFilters from "../../components/SearchFilters/SearchFilters.js";
import "./ProductsScreen.scss";
import Message from "../../components/Message.js";
import img from "../../logo.png";
import { Link } from "react-router-dom";

export default function ProductsScreen() {
  const [priceFilters, setPriceFilters] = useState([]);
  const [ratingFilters, setRatingFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      const priceFilterPassed =
        priceFilters.length === 0 || priceFilters.includes(product.priceRange);
      const ratingFilterPassed =
        ratingFilters.length === 0 || ratingFilters.includes(product.rating);
      const productNameLowercase = product.name.toLowerCase();
      const searchQueryLowercase = searchQuery.toLowerCase().trim();
      const nameFilterPassed =
        productNameLowercase.includes(searchQueryLowercase);

      return priceFilterPassed && ratingFilterPassed && nameFilterPassed;
    });

    setFilteredProducts(filteredProducts);
  }, [priceFilters, ratingFilters, searchQuery]);

  return (
    <div className="p-4">
      <nav>
        <Link to="/">
          <img src={img} alt="logo" className="logo" />
        </Link>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </nav>
      <h3>Search Results</h3>
      <Row>
        <Col md="3">
          <SearchFilters
            priceFilters={priceFilters}
            setPriceFilters={setPriceFilters}
            ratingFilters={ratingFilters}
            setRatingFilters={setRatingFilters}
          />
        </Col>
        <Col md="9">
          <Row>
            {!filteredProducts.length ? (
              <Message>No such product found</Message>
            ) : (
              filteredProducts.map((product) => (
                <Col key={product.id} sm="12" md="6" lg="4" xl="3">
                  <Product product={product} />
                </Col>
              ))
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

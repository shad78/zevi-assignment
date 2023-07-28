import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating.js";
import "./Product.scss";

export default function Product({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <>
      <Card className="my-3" style={{ border: "none" }}>
        <div>
          <span
            className="heart-icon"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            {isWishlisted ? (
              <i class="fa-solid fa-heart" style={{ color: "red" }}></i>
            ) : (
              <i class="fa-regular fa-heart"></i>
            )}
          </span>
          <Card.Img src={product.image} variant="top" />
        </div>
        <Card.Body>
          <Card.Text as="div">
            <strong>{product.name}</strong>
          </Card.Text>
          <Card.Text as="div">{product.price}</Card.Text>
          <Card.Text as="div">
            <Rating value={product.rating} text={` (${product.numReviews})`} />
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

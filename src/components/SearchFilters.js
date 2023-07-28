import React from "react";
import { Accordion, Form } from "react-bootstrap";
import "./SearchFilters.scss";

export default function SearchFilters({ priceFilters, setPriceFilters }) {
  const handlePrice = (event) => {
    const selectedPrice = event.target.value;
    if (priceFilters.includes(selectedPrice)) {
      setPriceFilters(
        priceFilters.filter((filter) => filter !== selectedPrice)
      );
    } else {
      setPriceFilters([...priceFilters, selectedPrice]);
    }
  };

  return (
    <>
      <Accordion
        defaultActiveKey={["0", "1"]}
        flush
        alwaysOpen
        className="my-3"
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>PRICE RANGE</Accordion.Header>
          <Accordion.Body>
            <Form>
              {["Under 500", "500 to 1000", "1000 to 2000"].map((name) => (
                <div key={name}>
                  <Form.Check
                    type="checkbox"
                    id={name}
                    label={name}
                    value={name}
                    onChange={handlePrice}
                  ></Form.Check>
                </div>
              ))}
            </Form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>RATINGS</Accordion.Header>
          <Accordion.Body>
            <Form>
              {["★★★★★", "★★★★☆", "★★★☆☆", "★★☆☆☆", "★☆☆☆☆"].map((name) => (
                <div>
                  <Form.Check
                    type="checkbox"
                    id={`${name}`}
                    label={`${name}`}
                  ></Form.Check>
                </div>
              ))}
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

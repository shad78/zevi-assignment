import React from "react";
import PropTypes from "prop-types";

export default function Rating({ value, text, color }) {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color }}
          className={value >= 1 ? "fa fa-star" : "fa-regular fa-star"}
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={value >= 2 ? "fa fa-star" : "fa-regular fa-star"}
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={value >= 3 ? "fa fa-star" : "fa-regular fa-star"}
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={value >= 4 ? "fa fa-star" : "fa-regular fa-star"}
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={value >= 5 ? "fa fa-star" : "fa-regular fa-star"}
        ></i>
      </span>
      <span>{text && text}</span>
    </div>
  );
}

Rating.defaultProps = {
  color: "#f8e825",
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

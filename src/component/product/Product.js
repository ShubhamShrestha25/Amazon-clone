import React from "react";
import "./Product.css";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Product = ({
  id,
  title,
  image,
  price,
  rating,
  specification,
  detail,
}) => {
  return (
    <div className="product">
      <div className="info">
        <Link to={`/products/${id}`} className="title">
          <p>{title}</p>
        </Link>
        <p className="price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((item, key) => (
              <p key={key}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button>
        <i>
          <ShoppingCartOutlined />
        </i>
        Add To Basket
      </button>
    </div>
  );
};

export default Product;

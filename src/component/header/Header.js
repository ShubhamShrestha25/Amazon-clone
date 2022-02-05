import React from "react";
import "./Header.css";
import {
  Search,
  LocationOnOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../../redux/action/actions";

const Header = () => {
  const { user, basket } = useSelector((state) => state.data);
  let dispatch = useDispatch();
  const handleAuth = () => {
    if (user) {
      dispatch(logoutInitiate());
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_logo"
        />
      </Link>
      <div className="header-option" style={{ marginRight: "-10px" }}>
        <LocationOnOutlined />
      </div>
      <div className="header-option">
        <span className="header-option1">Hello</span>
        <span className="header-option2">Select Your Address </span>
      </div>
      <div className="search">
        <select>
          <option>All</option>
        </select>
        <input type="text" className="searchInput" />
        <Search className="searchIcon" />
      </div>
      <div className="header-nav">
        <Link to={`${user ? "/" : "/login"}`} className="header-link">
          <div onClick={handleAuth} className="header-option">
            <span className="header-option1">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header-option2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="header-link">
          <div className="header-option">
            <span className="header-option1">Returns</span>
            <span className="header-option2">& Orders</span>
          </div>
        </Link>
        <Link to="/checkout" className="header-link">
          <div className="header-basket">
            <ShoppingCartOutlined />
            <span className="header-option2 basket-count">{basket && basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

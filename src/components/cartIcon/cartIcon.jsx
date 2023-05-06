import React from "react";
import Logo from "../../assets/shopping-bag.svg";

import "./cartIcon.scss";

const cartIcon = () => {
//   const { isCartOpen, setIsCartOpen } = useContext(CartContext);

//   const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" >
      <img src={Logo} alt="" className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default cartIcon;

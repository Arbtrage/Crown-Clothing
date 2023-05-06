import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../components/cartIcon/cartIcon";
import "./Navigation.scss";
import { UserContext } from "../../context/userContext";
import Logo from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {
            currentUser ?
              (
                <div className="user">
                  <span className="nav-link" onClick={signOutHandler}>Sign Out</span>
                  <CartIcon />
                </div>
              ) : (
                <Link className="nav-link" to="/getstarted">
                  Get Started
                </Link>

              )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

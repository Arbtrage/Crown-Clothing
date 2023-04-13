import { Fragment,useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navigation.scss";
import { UserContext } from "../../context/userContext";
import Logo from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase";
const Navigation = () => {
  const {currentUser,setCurrentUser}=useContext(UserContext);
  const signOutHandler=async()=>{
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
          {
            currentUser?
            <span className="nav-link" onClick={signOutHandler}>Sign Out</span>:
            <Link className="nav-link" to="/getstarted">
              Get Started
            </Link>

          }
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

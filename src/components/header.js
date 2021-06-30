import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import Cookies from "js-cookie";
import Button from "@material-ui/core/Button";
import { signOut } from "../api/auth";
import { AuthContext } from "../App";

const Header = () => {
  const { isSignedIn, setIsSignedIn } = useContext(AuthContext);
  const history = useHistory();

  const handleSignOut = async () => {
    try {
      const res = await signOut();

      if (res.data.success === true) {
        // サインアウト時には各Cookieを削除
        Cookies.remove("_access_token");
        Cookies.remove("_client");
        Cookies.remove("_uid");

        setIsSignedIn(false);
        history.push("/signin");

        console.log("Succeeded in sign out");
      } else {
        console.log("Failed in sign out");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="header-area">
        {isSignedIn && (
          <Button
            color="inherit"
            className="signout-button"
            onClick={handleSignOut}
          >
            Sign out
          </Button>
        )}
        {!isSignedIn && (
          <div className="header-button-area">
            <Button color="inherit" className="signin-button">
              <Link to="/signin">Sign in</Link>
            </Button>
            <Button color="inherit" className="signup-button">
              <Link to="/signin">Sign Up</Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

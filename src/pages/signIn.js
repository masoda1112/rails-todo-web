import { TextField, Button } from "@material-ui/core";
import { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import Cookies from "js-cookie";

import { signIn } from "../api/auth";
import { AuthContext } from "../App";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);
  const history = useHistory();
  const handleSubmit = async () => {
    try {
      const res = await signIn(email, password);
      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);

        setIsSignedIn(true);
        setCurrentUser(res.data.data);
        history.push("/");
        console.log("Signed in successfully!");
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <TextField
          variant="outlined"
          required
          fullWidth
          label="Email"
          value={email}
          margin="dense"
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          variant="outlined"
          required
          fullWidth
          label="Password"
          type="password"
          placeholder="At least 6 characters"
          value={password}
          margin="dense"
          autoComplete="current-password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          color="default"
          disabled={!email || !password ? true : false} // 空欄があった場合はボタンを押せないように
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Link to="/signup" className="signup-link">
          Sign Up now!
        </Link>
      </div>
    </>
  );
};

export default SignIn;

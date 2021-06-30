import { TextField, Button } from "@material-ui/core";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import Cookies from "js-cookie";
import { signUp } from "../api/auth";
import { AuthContext } from "../App";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);
  const history = useHistory();
  const handleSubmit = async () => {
    try {
      const res = await signUp(name, email, password, passwordConfirmation);
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
          label="Name"
          value={name}
          margin="dense"
          onChange={(event) => setName(event.target.value)}
        />
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
        <TextField
          variant="outlined"
          required
          fullWidth
          label="Password Confirmation"
          type="password"
          value={passwordConfirmation}
          margin="dense"
          autoComplete="current-password"
          onChange={(event) => setPasswordConfirmation(event.target.value)}
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
      </div>
    </>
  );
};

export default SignUp;

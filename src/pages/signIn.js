import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { signIn } from "../api/auth";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = () => {
    signIn(email, password);
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
      </div>
    </>
  );
};

export default SignIn;

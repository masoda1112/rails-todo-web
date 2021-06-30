import "./App.scss";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import Form from "./pages/form";
import List from "./pages/list";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import { getCurrentUser } from "./api/auth";

export const AuthContext = createContext();

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const handleGetCurrentUser = async () => {
    // resがpromiseとは限らないからこの書き方では対応できない
    // await getCurrentUser()
    //   .then((res) => {
    //     setIsSignedIn(true);
    //     setCurrentUser(res.data.data);
    //   })
    //   .catch(console.log("err"));
    try {
      const res = await getCurrentUser();

      if (res?.data.isLogin === true) {
        setIsSignedIn(true);
        setCurrentUser(res?.data.data);
        console.log(res?.data.data);
      } else {
        console.log("No current user");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetCurrentUser();
  }, []);

  const Private = ({ children }) => {
    if (isSignedIn) {
      return children;
    } else {
      return <Redirect to="/signin" />;
    }
  };

  return (
    <div className="App">
      <Router>
        <AuthContext.Provider
          value={{
            isSignedIn,
            setIsSignedIn,
            currentUser,
            setCurrentUser,
          }}
        >
          <div className="body">
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Private>
              <Route exact path="/create" component={Form} />
              <Route exact path="/" component={List} />
            </Private>
          </div>
        </AuthContext.Provider>
      </Router>
    </div>
  );
};

export default App;

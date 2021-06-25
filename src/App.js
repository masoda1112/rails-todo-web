import "./App.scss";
import Form from "./pages/form";
import List from "./pages/list";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="body">
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/create" component={Form} />
          <Route exact path="/" component={List} />
        </div>
      </Router>
    </div>
  );
};

export default App;

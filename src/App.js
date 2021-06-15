import "./App.scss";
import Form from "./pages/form";
import List from "./pages/list";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="body">
          <Route exact path="/create" component={Form} />
          <Route exact path="/" component={List} />
        </div>
      </Router>
    </div>
  );
};

export default App;

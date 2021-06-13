import "./App.scss";
import Create from "./pages/create";
import List from "./pages/list";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/create" component={Create} />
          <Route exact path="/" component={List} />
        </div>
      </Router>
    </div>
  );
};

export default App;

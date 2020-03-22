import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import GetPost from "./components/GetPost/GetPost";
import AddPost from "./components/AddPost/AddPost";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">
          <span className="spanApp">Post</span>
        </Link>
        <Link to="/addpost">
          <span className="spanApp">AddPost</span>
        </Link>
        <Route exact path="/" component={GetPost} />
        <Route exact path="/addpost" component={AddPost} />
      </Router>
    </div>
  );
}

export default App;

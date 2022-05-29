import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Page/Home";
import CreateToDo from "./Page/CreateToDo";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/todo" element={<CreateToDo />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

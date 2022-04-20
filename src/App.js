// import Signin from './Component/Signin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Signin from './Component/Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;

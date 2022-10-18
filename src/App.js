import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Home/Hero";
import Details from "./components/Details";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;

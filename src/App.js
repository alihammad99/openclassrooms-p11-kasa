import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Home/Hero";
import Details from "./components/Details";
import NotFound from "./components/404";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "Kasa";
  });
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;

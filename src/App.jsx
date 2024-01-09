import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/aboutPage";
import Add from "./pages/addPage";
import Home from "./pages/homePage";
import Service from "./pages/servicePage";

import Header from "./layouts/header";
import Blog from "./pages/blogPage";
import Contact from "./pages/contactPage";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/add" element={<Add />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

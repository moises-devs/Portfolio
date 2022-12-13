import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { themeCtx } from "./Store/ThemeProvider";
import "./index.css";
import Experience from "./Pages/Experience/Experience";
import Education from "./Pages/Education/Education";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
function App() {
  const ctx = useContext(themeCtx);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;

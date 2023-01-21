import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Experience from "./Pages/Experience/Experience";
import Education from "./Pages/Education/Education";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {AnimatePresence} from "framer-motion";
function App() {
  const location = useLocation();
  return (
      <div className="pagecontent">
        <Header />
        <AnimatePresence key={location.pathname} mode={'wait'}>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </AnimatePresence>
        <Footer />
      </div>
  );
}

export default App;

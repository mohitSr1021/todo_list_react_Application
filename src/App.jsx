import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import SetTasks from "./components/SetTasks";
import AllTasks from "./components/AllTasks";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo_list_react_application/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/task" element={<SetTasks />} />
        <Route path="/view-tasks" element={<AllTasks />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav bar/nav";
import Theme from "./theme/theme";
import Team_Page from "./Team Page/Team_Page";
import AchievementsTag from "./achieve/achieved";
import Contact from "./contact/contact";
import Footer from "./footer/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Routes>
            <Route path="/" element={<Theme />} />
            <Route path="/Team" element={<Team_Page />} />
            <Route path="/achieve" element={<AchievementsTag />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

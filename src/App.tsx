import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import ClientOutcomes from "./Pages/ClientOutcomes";
import Insights from "./Pages/Insights";
import Contact from "./Pages/Contact";
import "./index.css";

/* ── Google Fonts ── */
const link = document.createElement("link");
link.rel  = "stylesheet";
link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap";
document.head.appendChild(link);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/"                element={<Home />}           />
          <Route path="/about"           element={<About />}          />
          <Route path="/services"        element={<Services />}       />
          <Route path="/client-outcomes" element={<ClientOutcomes />} />
          <Route path="/insights"        element={<Insights />}       />
          <Route path="/contact"         element={<Contact />}        />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
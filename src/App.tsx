import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import ClientOutcomes from "./Pages/ClientOutcomes";
import Insights from "./Pages/Insights";
import Contact from "./Pages/Contact";
import BuyerAgentPerthBlog from "./Pages/BuyerAgentPerthBlog";
import BestSuburbsPerthBlog from "./Pages/BestSuburbsPerthBlog";

// ── 8 Service Pages ──
import BuyerAdvocate      from "./Services-pages/BuyerAdvocate";
import Advisory           from "./Services-pages/Advisory";
import PropertyManagement from "./Services-pages/PropertyManagement";
import SettlementAgent    from "./Services-pages/SettlementAgent";
import BuildingInspection from "./Services-pages/BuildingInspection";
import SalesAgent         from "./Services-pages/SalesAgent";
import QuantitySurveyor   from "./Services-pages/QuantitySurveyor";
import Accounting         from "./Services-pages/Accounting";

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

          {/* ── Existing Routes ── */}
          <Route path="/"                element={<Home />}           />
          <Route path="/about"           element={<About />}          />
          <Route path="/services"        element={<Services />}       />
          <Route path="/client-outcomes" element={<ClientOutcomes />} />
          <Route path="/insights"        element={<Insights />}       />
          <Route path="/contact"         element={<Contact />}        />
          <Route path="/blog/buyers-agent-perth" element={<BuyerAgentPerthBlog />} />
          <Route path="/blog/best-suburbs-perth" element={<BestSuburbsPerthBlog />} />

          {/* ── 8 Service Pages ── */}
          <Route path="/services/buyer-advocate"      element={<BuyerAdvocate />}      />
          <Route path="/services/advisory"            element={<Advisory />}            />
          <Route path="/services/property-management" element={<PropertyManagement />}  />
          <Route path="/services/settlement-agent"    element={<SettlementAgent />}     />
          <Route path="/services/building-inspection" element={<BuildingInspection />}  />
          <Route path="/services/sales-agent"         element={<SalesAgent />}          />
          <Route path="/services/quantity-surveyor"   element={<QuantitySurveyor />}    />
          <Route path="/services/accounting"          element={<Accounting />}          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
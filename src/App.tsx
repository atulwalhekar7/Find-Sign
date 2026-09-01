import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeContext";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import ClientOutcomes from "./Pages/ClientOutcomes/ClientOutcomes";
import Insights from "./Pages/Insights/Insights";
import Contact from "./Pages/Contact/Contact";
import Calculator from "./components/Calculator/Calculator";
import BuyerAgentPerthBlog from "./Pages/Blogs/BuyerAgentPerthBlog/BuyerAgentPerthBlog";
import BestSuburbsPerthBlog from "./Pages/Blogs/BestSuburbsPerthBlog/BestSuburbsPerthBlog";
import StepbyStepGuideBlog from "./Pages/Blogs/Step-by-Step Guide/Step-by-StepGuide";
import FindTrustworthyBuyers from "./Pages/Blogs/FindTrustworthyBuyers/FindTrustworthyBuyers";
import PerthBuyerAdvocate from "./Pages/Blogs/PerthBuyerAgentBlog/PerthBuyerAgent";
import ChooseRightBuyer from "./Pages/Blogs/ChooseRightBuyer/ChooseRightBuyer";
import TheHiddenCosts from "./Pages/Blogs/TheHiddenCostsBlog/TheHiddenCosts";

import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndConditions";
import FindAndSignBuyerAdvocatePage from "./Pages/Find-and-sign-buyer-advocate/Find-and-sign-buyer-advocate";

// ── 8 Service Pages ──
import BuyerAdvocate      from "./Services-pages/BuyerAdvocate/BuyerAdvocate";
import Advisory           from "./Services-pages/Advisory/Advisory";
import PropertyManagement from "./Services-pages/PropertyManagement/PropertyManagement";
import SettlementAgent    from "./Services-pages/SettlementAgent/SettlementAgent";
import BuildingInspection from "./Services-pages/BuildingInspection/BuildingInspection";
import SalesAgent         from "./Services-pages/SalesAgent/SalesAgent";
import QuantitySurveyor   from "./Services-pages/QuantitySurveyor/QuantitySurveyor";
import MortageBroker         from "./Services-pages/Accounting/MortageBroker";
import PrivacyPolicy from "./Pages/Privacy-Policy/Privacy-Policy";
import "./index.css";

/* ── Google Fonts ── */
const link = document.createElement("link");
link.rel  = "stylesheet";
link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap";
document.head.appendChild(link);

function App() {
  return (
    // ── ThemeProvider wraps everything so all pages inherit the theme ──
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
                      <Route path="/niki-nakrani-buyer-advocate" element={<FindAndSignBuyerAdvocatePage />} />

          <Route element={<MainLayout />}>

            {/* ── Existing Routes ── */}
            <Route path="/"                element={<Home />}           />
            <Route path="/about"           element={<About />}          />
            <Route path="/services"        element={<Services />}       />
            <Route path="/client-outcomes" element={<ClientOutcomes />} />
            <Route path="/insights"        element={<Insights />}       />
            <Route path="/contact"         element={<Contact />}        />
            <Route path="/calculator"      element={<Calculator />}     />
            <Route path="/blog/buyers-agent-perth" element={<BuyerAgentPerthBlog />} />
            <Route path="/blog/best-suburbs-perth" element={<BestSuburbsPerthBlog />} />
            <Route path="/blog/perth-buyers-agent-advocate-wa" element={<StepbyStepGuideBlog />} />
            <Route path="/blog/find-trustworthy-buyers" element={<FindTrustworthyBuyers />} />
            <Route path="/blog/perth-buyers-advocate" element={<PerthBuyerAdvocate />} /> 
            <Route path="/blog/how-to-choose-right-buyers-agent-perth" element={<ChooseRightBuyer />} />
            <Route path="/blog/hidden-costs-buying-property-western-australia" element={<TheHiddenCosts />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

            {/* ── 8 Service Pages ── */}
            <Route path="/services/buyer-advocate"      element={<BuyerAdvocate />}      />
            <Route path="/services/advisory"            element={<Advisory />}            />
            <Route path="/services/property-management" element={<PropertyManagement />}  />
            <Route path="/services/settlement-agent"    element={<SettlementAgent />}     />
            <Route path="/services/building-inspection" element={<BuildingInspection />}  />
            <Route path="/services/sales-agent"         element={<SalesAgent />}          />
            <Route path="/services/quantity-surveyor"   element={<QuantitySurveyor />}    />
            <Route path="/services/mortgage-broker"     element={<MortageBroker />}       />

            {/* Buyer Advocate (link page) */}
          
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
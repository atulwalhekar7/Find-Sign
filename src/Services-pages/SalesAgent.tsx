import { useEffect } from "react";
import bannerImg from "../assets/DSC06227.jpg";
import SimpleFooter from "../components/SimpleFooter";
import SimpleGetInTouch from "../components/GetInTouch";
import AboutServiceImg from "../assets/About Our Services.jpg";
import AboutSection from "../components/AboutSection";

export default function SettlementAgent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div style={{ background: "#fff", margin: 0, padding: 0, color: "#111" }}>

      {/* ── Hero ── */}
      <section
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "0 20px",
            animation: "heroFadeIn 0.8s ease both",
          }}
        >
          <h1
            style={{
              fontFamily: "GT Super Display Medium",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 500,
              color: "#fff",
              letterSpacing: "-1.28px",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Sales Agent
          </h1>
         
        </div>
      </section>

      {/* ── About ── */}
      <AboutSection
        imageSrc={AboutServiceImg}
        heading="About Sales Agent"
        subheading="Expert guidance for every step of your property journey."
        body1="Find and Sign Buyer Advocate is a boutique buyers agency based in Perth, representing buyers exclusively, whether you are purchasing the home you want to live in or building the portfolio you have always planned for.
We take on a select number of clients at any one time. Not because we have to, but because we believe a purchase of this size deserves our full attention."
        body2="Our approach is simple. We assess your situation, search with purpose, and lean into our relationships to find the right property for you. Data drives our recommendations, but your specific goals shape every decision. The result is a process that feels seamless, a strategy built around you, and an outcome set up for long-term success.
From the first conversation to settlement and beyond, we are in your corner. Your sounding board. Your advocate. Your edge in the market."
      />
     
      <SimpleGetInTouch initialService="Building Inspection" showService={true} />
</xai:function_call >

Wait, wrong for BuildingInspection – need exact old_str.

From read BuildingInspection: <SimpleGetInTouch initialService="Settlement Agent" />

Same for SalesAgent.

Exact indentation: "      <SimpleGetInTouch initialService=\"Settlement Agent\" />"

Yes, 6 spaces.

For Building: new initialService="Building Inspection"

For SalesAgent: "Sales Agent"

Settlement no change to initial.

Also QuantitySurveyor likely same.

Now tool calls.

Note: path relative ok? Rules say absolute or relative, current dir Find-Sign parent.

CWD is c:/Work-projects/Find and sign, files Find-Sign/src/... so relative "Find-Sign/src/..." fine.

Proceed. 

Parallel: 3 edits + read remaining 4 + edit TODO.md? But one tool per? No, multiple parallel.

Guidelines: Always prefer multiple tools parallel.

But edit_file one per, but multiple calls.

For TODO edit later.

First fix these 3 edits. For Building, old_str same as Settlement.

Confirm in read: Yes. 

For BuildingInspection read content has <SimpleGetInTouch initialService="Settlement Agent" />

Same string.

So for Building:

old_str = '      <SimpleGetInTouch initialService="Settlement Agent" />'

new_str = '      <SimpleGetInTouch initialService="Building Inspection" showService={true} />'

SalesAgent: new "Sales Agent"

Settlement: new '      <SimpleGetInTouch initialService="Settlement Agent" showService={true} />'

Perfect, exact match.

Already have BuyerAdvocate from previous read: let's do it too.

BuyerAdvocate read: "// ── 8 Service Pages ──

      <SimpleGetInTouch initialService="Buyer Advocate" />

" Different indentation? No, likely "      <"

Assume same.

Previous read BuyerAdvocate: 

"      <SimpleGetInTouch initialService="Buyer Advocate" />

<SimpleFooter />"

Yes.

But to be safe, since not read again, do the ones read.

Now read remaining: Advisory, PropertyManagement, QuantitySurveyor, Accounting. 

4 reads. 

Then edits.

Since parallel, do edits for these 3, reads for 4.

Yes. 

Service names from SERVICE_ROUTES:

"Building Inspection"

"Sales Agent"

"Quantity Surveyor" 

Assume. 

Yes.

Also for TODO update later.

No active terminals, ok. </thinking> 

<xai:function_call name="edit_file">
<parameter name="path">Find-Sign/src/Services-pages/SettlementAgent.tsx
      <SimpleFooter />

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .sa-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
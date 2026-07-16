import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "../../components/ThemeContext";
import "./Calculator.css";
import SimpleGetInTouch from "../../components/GetInTouch/GetInTouch";
import SimpleFooter from "../../components/SimpleFooter";

const LEAD_STORAGE_KEY = "pc_lead_captured";

// ── Theme ─────────────────────────────────────────────────────────────────────
const THEMES = {
  dark: {
    pageBg: "#121212",
    headingColor: "#F9F9F9",
    dividerColor: "#F9F9F9",
    subtitleColor: "#EAE5DF",
    cardBg: "#1E1E1E",
    cardBorder: "#69E4DC",
    titleColor: "#F9F9F9",
    dateColor: "#A0A0A0",
    descColor: "#A0A0A0",
    btnColor: "#69E4DC",
    btnBg: "transparent",
    btnBgHover: "#69E4DC",
    btnColorHover: "#073B2F",
    inputBg: "#1E1E1E",
    inputBorder: "#69E4DC",
    inputText: "#F9F9F9",
    autoBg: "rgba(105,228,220,0.08)",
    autoBorder: "#69E4DC",
    autoText: "#69E4DC",
    totalBg: "rgba(249,249,249,0.06)",
    totalBorder: "#F9F9F9",
    totalText: "#F9F9F9",
    editBg: "rgba(105,228,220,0.15)",
    editBorder: "#69E4DC",
    editText: "#F9F9F9",
  },
  light: {
    pageBg: "#FFFFFF",
    headingColor: "#073B2F",
    dividerColor: "#073B2F",
    subtitleColor: "#000000",
    cardBg: "#FFFFFF",
    cardBorder: "#69E4DC",
    titleColor: "#000000",
    dateColor: "#6C5843",
    descColor: "#757575",
    btnColor: "#073B2F",
    btnBg: "#FFFFFF",
    btnBgHover: "#69E4DC",
    btnColorHover: "#073B2F",
    inputBg: "#FFFFFF",
    inputBorder: "#69E4DC",
    inputText: "#073B2F",
    autoBg: "rgba(7,59,47,0.05)",
    autoBorder: "#69E4DC",
    autoText: "#073B2F",
    totalBg: "rgba(7,59,47,0.08)",
    totalBorder: "#073B2F",
    totalText: "#073B2F",
    editBg: "rgba(105,228,220,0.18)",
    editBorder: "#69E4DC",
    editText: "#073B2F",
  },
};

type RepayMode = "IO" | "PI" | "BOTH";
type FhbOption = "N" | "metro" | "regional";
type SectionKey = "A" | "B" | "C" | "D" | "E" | "F" | "G";
type FilterKey = "ALL" | SectionKey;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "ALL", label: "All Calculators" },
  { key: "A", label: "Property Details" },
  { key: "D", label: "Rental Income" },
  { key: "B", label: "Purchase Costs" },
  { key: "E", label: "Operating Expenses" },
  { key: "C", label: "Finance" },
  { key: "F", label: "Yields & Returns" },
  { key: "G", label: "Projected Value" },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
const num = (val: string) => parseFloat(val) || 0;
const fmtD = (n: number) => (n < 0 ? "-" : "") + "$" + Math.abs(Math.round(n)).toLocaleString();
const fmtP = (n: number) => n.toFixed(2) + "%";

function calcStampWA(price: number, fhbType: FhbOption) {
  const std = (p: number) => {
    if (p <= 0) return 0;
    if (p <= 120000) return p * 0.019;
    if (p <= 150000) return 2280 + (p - 120000) * 0.0285;
    if (p <= 360000) return 3135 + (p - 150000) * 0.038;
    if (p <= 725000) return 11115 + (p - 360000) * 0.0475;
    return 28453 + (p - 725000) * 0.0515;
  };

  if (fhbType === "metro") {
    if (price <= 500000) return { duty: 0, note: "FHB Metro: full exemption (≤ $500k)" };
    if (price <= 700000)
      return {
        duty: (price - 500000) * 0.1363,
        note: "FHB Metro: concessional rate — $13.63 per $100 over $500k",
      };
    return { duty: std(price), note: "FHB Metro: above $700k — full standard duty applies" };
  }

  if (fhbType === "regional") {
    if (price <= 500000) return { duty: 0, note: "FHB Regional: full exemption (≤ $500k)" };
    if (price <= 750000)
      return {
        duty: (price - 500000) * 0.1189,
        note: "FHB Regional: concessional rate — $11.89 per $100 over $500k",
      };
    return { duty: std(price), note: "FHB Regional: above $750k — full standard duty applies" };
  }

  return { duty: std(price), note: "Standard WA transfer duty rates" };
}

// ── Small presentational helpers ────────────────────────────────────────────
const Row = ({ label, sub, children }: { label: string; sub?: string; children: React.ReactNode }) => (
  <div className="pc-row">
    <label>
      {label}
      {sub && <span className="pc-row__sub">{sub}</span>}
    </label>
    {children}
  </div>
);

const Auto = ({ id, value }: { id?: string; value: string }) => (
  <div className="pc-auto" id={id}>
    {value}
  </div>
);

const Section = ({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="pc-panel">
    <div className="pc-ph">
      <span className="pc-ph-left">
        <span className="pc-dot" />
        {label}. {title}
      </span>
    </div>
    <div className="pc-pb">{children}</div>
  </div>
);

const ExportIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 3v12m0 0l-4-4m4 4l4-4M5 19h14"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ── Main component ───────────────────────────────────────────────────────────
export default function PropertyInvestmentCalculator() {
  const { theme } = useTheme();
  const t = THEMES[theme];

  const [activeFilter, setActiveFilter] = useState<FilterKey>("ALL");

  // ── Lead-gate: PDF export is only unlocked once the Get in Touch form
  // has been submitted successfully. Persisted in localStorage so a repeat
  // visitor (same browser) doesn't have to fill it in again every time.
  const [hasSubmittedForm, setHasSubmittedForm] = useState(false);
  const [showGateNotice, setShowGateNotice] = useState(false);
  const [flashGetInTouch, setFlashGetInTouch] = useState(false);
  const getInTouchRef = useRef<HTMLDivElement>(null);
  const gateNoticeTimer = useRef<number | null>(null);
  const gateFlashTimer = useRef<number | null>(null);

  // Ref to the main printable wrapper — used to clone the visible content
  // into a new tab when exporting to PDF.
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (localStorage.getItem(LEAD_STORAGE_KEY) === "true") {
        setHasSubmittedForm(true);
      }
    } catch {
      // localStorage unavailable — just fall back to requiring the form
      // every visit, no need to crash.
    }
  }, []);

  useEffect(() => {
    return () => {
      if (gateNoticeTimer.current) window.clearTimeout(gateNoticeTimer.current);
      if (gateFlashTimer.current) window.clearTimeout(gateFlashTimer.current);
    };
  }, []);

  const handleLeadCaptured = () => {
    setHasSubmittedForm(true);
    setShowGateNotice(false);
    try {
      localStorage.setItem(LEAD_STORAGE_KEY, "true");
    } catch {
      // ignore storage failures — in-memory state still unlocks export for
      // the rest of this session.
    }
  };

  const triggerGate = () => {
    setShowGateNotice(true);
    getInTouchRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    setFlashGetInTouch(true);
    if (gateFlashTimer.current) window.clearTimeout(gateFlashTimer.current);
    gateFlashTimer.current = window.setTimeout(() => setFlashGetInTouch(false), 1600);

    if (gateNoticeTimer.current) window.clearTimeout(gateNoticeTimer.current);
    gateNoticeTimer.current = window.setTimeout(() => setShowGateNotice(false), 6000);
  };

  // Export-to-PDF flow: open a new tab containing ONLY the visible,
  // printable content (whichever filter is active — "ALL" exports every
  // section, a specific filter exports only that one), then trigger print
  // in that tab. Anything marked pc-no-print (filter bar, export buttons,
  // Get in Touch form, footer) is stripped from the clone first.
  const handleExportPDF = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow || !containerRef.current) return;

    // Pull in the page's stylesheets so the new tab renders identically.
    const styles = Array.from(document.styleSheets)
      .map((sheet) => {
        try {
          return Array.from(sheet.cssRules)
            .map((rule) => rule.cssText)
            .join("\n");
        } catch {
          // Cross-origin stylesheets can't be read — skip them.
          return "";
        }
      })
      .join("\n");

    // Clone the visible content and strip anything marked pc-no-print.
    const clone = containerRef.current.cloneNode(true) as HTMLElement;
    clone.querySelectorAll(".pc-no-print").forEach((el) => el.remove());

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Property Analyser - Export</title>
          <style>${styles}</style>
        </head>
        <body>${clone.outerHTML}</body>
      </html>
    `);
    printWindow.document.close();

    printWindow.onload = () => {
      printWindow.focus();
      printWindow.print();
    };
  };

  // A. Property details
  const [address, setAddress] = useState("");
  const [propType, setPropType] = useState("House");
  const [bbc, setBbc] = useState("");
  const [land, setLand] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");

  // D. Rental income
  const [weeklyRent, setWeeklyRent] = useState(650);
  const [vacancyRate, setVacancyRate] = useState(2);

  // B. Purchase costs
  const [purchasePrice, setPurchasePrice] = useState(650000);
  const [fhb, setFhb] = useState<FhbOption>("N");
  const [legalBuy, setLegalBuy] = useState(1800);
  const [buildPest, setBuildPest] = useState(650);
  const [lmi, setLmi] = useState(0);
  const [agentFee, setAgentFee] = useState(0);
  const [otherCosts, setOtherCosts] = useState(500);

  // E. Operating expenses
  const [pmPct, setPmPct] = useState(8.5);
  const [councilRates, setCouncilRates] = useState(1800);
  const [waterRates, setWaterRates] = useState(1000);
  const [llInsurance, setLlInsurance] = useState(1200);
  const [maintenance, setMaintenance] = useState(1500);
  const [bldgInsurance, setBldgInsurance] = useState(1800);
  const [strata, setStrata] = useState(0);
  const [landTax, setLandTax] = useState(0);
  const [accounting, setAccounting] = useState(500);

  // C. Finance
  const [loanAmt, setLoanAmt] = useState(520000);
  const [interestRate, setInterestRate] = useState(6.2);
  const [loanTerm, setLoanTerm] = useState(30);
  const [mode, setMode] = useState<RepayMode>("IO");

  // G. Reform Value (capital growth projection)
  const [growthRate, setGrowthRate] = useState(5);
  const [reformOverride, setReformOverride] = useState<number | null>(null);

  // ── Derived values ─────────────────────────────────────────────────────────
  const stampResult = useMemo(() => calcStampWA(purchasePrice, fhb), [purchasePrice, fhb]);
  const stampDuty = stampResult.duty;

  const totalAcq = purchasePrice + stampDuty + legalBuy + buildPest + lmi + agentFee + otherCosts;

  const annualRent = weeklyRent * 52;
  const effectiveRent = annualRent * (1 - vacancyRate / 100);

  const pmFee = (effectiveRent * pmPct) / 100;
  const totalExp =
    pmFee + councilRates + waterRates + llInsurance + maintenance + bldgInsurance + strata + landTax + accounting;

  const lvr = purchasePrice > 0 ? (loanAmt / purchasePrice) * 100 : 0;
  const lvrTotal = totalAcq > 0 ? (loanAmt / totalAcq) * 100 : 0;
  const cashRequired = totalAcq - loanAmt;

  const monthlyRate = interestRate / 100 / 12;
  const nPayments = loanTerm * 12;

  const ioMonthly = loanAmt * monthlyRate;
  const ioAnnual = ioMonthly * 12;

  const piMonthly =
    monthlyRate > 0
      ? (loanAmt * (monthlyRate * Math.pow(1 + monthlyRate, nPayments))) /
        (Math.pow(1 + monthlyRate, nPayments) - 1)
      : nPayments > 0
      ? loanAmt / nPayments
      : 0;
  const piAnnual = piMonthly * 12;

  const activeMonthly = mode === "PI" ? piMonthly : ioMonthly;
  const activeAnnual = mode === "PI" ? piAnnual : ioAnnual;
  const modeLabel = mode === "PI" ? "Monthly P&I repayment" : "Monthly IO repayment";
  const cfLabel =
    mode === "IO" ? "based on IO repayment" : mode === "PI" ? "based on P&I repayment" : "based on IO (lower repayment)";

  const grossYield = purchasePrice > 0 ? (annualRent / purchasePrice) * 100 : 0;
  const noi = effectiveRent - totalExp;
  const netYield = purchasePrice > 0 ? (noi / purchasePrice) * 100 : 0;
  const annualCF = noi - activeAnnual;
  const weeklyCF = annualCF / 52;
  const cocBase = Math.max(cashRequired, 0);
  const cocReturn = cocBase > 0 ? (annualCF / cocBase) * 100 : 0;

  let loanNoteClass: "over" | "under" = "under";
  let loanNoteText = "";
  if (loanAmt > totalAcq) {
    loanNoteClass = "over";
    loanNoteText = `Loan exceeds total acquisition by ${fmtD(loanAmt - totalAcq)} — covers costs + cashback/equity release`;
  } else if (loanAmt >= purchasePrice && loanAmt <= totalAcq) {
    loanNoteClass = "over";
    loanNoteText = "Loan covers purchase price + some transaction costs";
  } else {
    loanNoteClass = "under";
    loanNoteText = `${fmtD(cashRequired)} cash required from client`;
  }

  const yearsTo2027 = useMemo(() => {
    const target = new Date("2027-06-30T00:00:00");
    const now = new Date();
    const diffMs = target.getTime() - now.getTime();
    return Math.max(diffMs / (1000 * 60 * 60 * 24 * 365.25), 0);
  }, []);

  const estimatedReformValue = purchasePrice * Math.pow(1 + growthRate / 100, yearsTo2027);
  const reformValue = reformOverride !== null ? reformOverride : estimatedReformValue;

  const themeVars = {
    "--pc-page-bg": t.pageBg,
    "--pc-heading": t.headingColor,
    "--pc-divider": t.dividerColor,
    "--pc-subtitle": t.subtitleColor,
    "--pc-card-bg": t.cardBg,
    "--pc-card-border": t.cardBorder,
    "--pc-title": t.titleColor,
    "--pc-date": t.dateColor,
    "--pc-desc": t.descColor,
    "--pc-btn-color": t.btnColor,
    "--pc-btn-bg": t.btnBg,
    "--pc-btn-bg-hover": t.btnBgHover,
    "--pc-btn-color-hover": t.btnColorHover,
    "--pc-input-bg": t.inputBg,
    "--pc-input-border": t.inputBorder,
    "--pc-input-text": t.inputText,
    "--pc-auto-bg": t.autoBg,
    "--pc-auto-border": t.autoBorder,
    "--pc-auto-text": t.autoText,
    "--pc-total-bg": t.totalBg,
    "--pc-total-border": t.totalBorder,
    "--pc-total-text": t.totalText,
    "--pc-edit-bg": t.editBg,
    "--pc-edit-border": t.editBorder,
    "--pc-edit-text": t.editText,
  } as React.CSSProperties;

  const showSection = (key: SectionKey) => activeFilter === "ALL" || activeFilter === key;

  return (
    <>
      <div ref={containerRef} className={`pc-wrap pc-theme-${theme}`} style={themeVars}>
        <section className="blog-heading-section">
          <h1>Know Before You Sign - Property Analyser</h1>
        </section>

        <div className="pc-filter-bar pc-no-print" role="tablist" aria-label="Filter calculator sections">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={activeFilter === f.key}
              className={`pc-filter-pill ${activeFilter === f.key ? "pc-filter-pill--active" : ""}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="pc-export-bar pc-no-print">
          <div className="pc-export-bar__inner">
            <button type="button" className="pc-export-btn" onClick={handleExportPDF}>
              <ExportIcon />
              Export as PDF
            </button>
            <div className="pc-export-hint">
              {activeFilter === "ALL"
                ? "Opens a printable PDF in a new tab"
                : `Opens a printable PDF of the "${FILTERS.find((f) => f.key === activeFilter)?.label}" section in a new tab`}
            </div>
          </div>
        </div>

        {showGateNotice && (
          <div className="pc-gate-notice pc-no-print" role="status">
            Please fill in the "Get in touch" form below to unlock PDF export.
          </div>
        )}

        <div className="pc-body">
          {showSection("A") && (
            <Section label="A" title="Property details">
              <Row label="Street address">
                <input
                  type="text"
                  className="pc-input pc-input--left"
                  placeholder="e.g. 12 Palm St"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Row>
              <Row label="Property type">
                <select className="pc-select" value={propType} onChange={(e) => setPropType(e.target.value)}>
                  <option>House</option>
                  <option>Unit</option>
                  <option>Townhouse</option>
                  <option>Land</option>
                </select>
              </Row>
              <Row label="Bed / Bath / Car">
                <input
                  type="text"
                  className="pc-input pc-input--left"
                  placeholder="3 / 2 / 1"
                  value={bbc}
                  onChange={(e) => setBbc(e.target.value)}
                />
              </Row>
              <Row label="Land area (m²)">
                <input
                  type="number"
                  className="pc-input"
                  placeholder="-"
                  value={land}
                  onChange={(e) => setLand(e.target.value)}
                />
              </Row>
              <Row label="Year built">
                <input
                  type="number"
                  className="pc-input"
                  placeholder="e.g. 2005"
                  value={yearBuilt}
                  onChange={(e) => setYearBuilt(e.target.value)}
                />
              </Row>
            </Section>
          )}

          {showSection("D") && (
            <Section label="D" title="Rental income">
              <Row label="Weekly rent ($)">
                <input
                  type="number"
                  className="pc-input"
                  value={weeklyRent}
                  onChange={(e) => setWeeklyRent(num(e.target.value))}
                />
              </Row>
              <Row label="Annual gross rent ($)">
                <Auto value={fmtD(annualRent)} />
              </Row>
              <Row label="Vacancy rate (%)">
                <input
                  type="number"
                  min={0}
                  max={100}
                  step={0.5}
                  className="pc-input"
                  value={vacancyRate}
                  onChange={(e) => setVacancyRate(num(e.target.value))}
                />
              </Row>
              <Row label="Effective annual rent ($)">
                <Auto value={fmtD(effectiveRent)} />
              </Row>
            </Section>
          )}

          {showSection("B") && (
            <Section label="B" title="Purchase costs">
              <Row label="Purchase price ($)">
                <input
                  type="number"
                  step={1000}
                  className="pc-input"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(num(e.target.value))}
                />
              </Row>
              <Row label="First home buyer?">
                <select className="pc-select" value={fhb} onChange={(e) => setFhb(e.target.value as FhbOption)}>
                  <option value="N">No</option>
                  <option value="metro">Yes — Metro/Peel</option>
                  <option value="regional">Yes — Regional WA</option>
                </select>
              </Row>
              <Row label="Stamp duty — WA (auto)">
                <Auto value={fmtD(stampDuty)} />
              </Row>
              <div className="pc-stamp-note">{stampResult.note}</div>
              <Row label="Legal / conveyancing ($)">
                <input
                  type="number"
                  className="pc-input"
                  value={legalBuy}
                  onChange={(e) => setLegalBuy(num(e.target.value))}
                />
              </Row>
              <Row label="Building &amp; pest ($)">
                <input
                  type="number"
                  className="pc-input"
                  value={buildPest}
                  onChange={(e) => setBuildPest(num(e.target.value))}
                />
              </Row>
              <Row label="LMI ($)">
                <input type="number" className="pc-input" value={lmi} onChange={(e) => setLmi(num(e.target.value))} />
              </Row>
              <Row label="Buyers agent fee ($)">
                <input
                  type="number"
                  className="pc-input"
                  value={agentFee}
                  onChange={(e) => setAgentFee(num(e.target.value))}
                />
              </Row>
              <Row label="Other costs ($)">
                <input
                  type="number"
                  className="pc-input"
                  value={otherCosts}
                  onChange={(e) => setOtherCosts(num(e.target.value))}
                />
              </Row>
              <Row label="Total acquisition ($)">
                <div className="pc-total">{fmtD(totalAcq)}</div>
              </Row>
            </Section>
          )}

          {showSection("E") && (
            <Section label="E" title="Operating expenses (annual)">
              <Row label="PM fee (%)">
                <input
                  type="number"
                  step={0.5}
                  className="pc-input"
                  value={pmPct}
                  onChange={(e) => setPmPct(num(e.target.value))}
                />
              </Row>
              <Row label="→ PM fee ($)">
                <Auto value={fmtD(pmFee)} />
              </Row>
              <Row label="Council rates ($)">
                <input
                  type="number"
                  className="pc-input"
                  value={councilRates}
                  onChange={(e) => setCouncilRates(num(e.target.value))}
                />
              </Row>
              <Row label="Water rates ($)">
                <input
                  type="number"
                  className="pc-input"
                  value={waterRates}
                  onChange={(e) => setWaterRates(num(e.target.value))}
                />
              </Row>
              <Row label="Landlord insurance ($)">
                <input
                  type="number"
                  className="pc-input"
                  value={llInsurance}
                  onChange={(e) => setLlInsurance(num(e.target.value))}
                />
              </Row>
              <Row label="Maintenance ($)">
                <input
                  type="number"
                  className="pc-input"
                  value={maintenance}
                  onChange={(e) => setMaintenance(num(e.target.value))}
                />
              </Row>
              <Row label="Building insurance ($)">
                <input
                  type="number"
                  className="pc-input"
                  value={bldgInsurance}
                  onChange={(e) => setBldgInsurance(num(e.target.value))}
                />
              </Row>
              <Row label="Strata / body corp ($)">
                <input
                  type="number"
                  className="pc-input"
                  value={strata}
                  onChange={(e) => setStrata(num(e.target.value))}
                />
              </Row>
              <Row label="Land tax ($)">
                <input
                  type="number"
                  className="pc-input"
                  value={landTax}
                  onChange={(e) => setLandTax(num(e.target.value))}
                />
              </Row>
              <Row label="Accounting ($)">
                <input
                  type="number"
                  className="pc-input"
                  value={accounting}
                  onChange={(e) => setAccounting(num(e.target.value))}
                />
              </Row>
              <Row label="Total expenses ($)">
                <div className="pc-total">{fmtD(totalExp)}</div>
              </Row>
            </Section>
          )}

          {showSection("C") && (
            <Section label="C" title="Finance">
              <Row label="Total acquisition (ref)">
                <Auto value={fmtD(totalAcq)} />
              </Row>
              <Row label="Loan amount ($)" sub="editable — can exceed purchase price">
                <input
                  type="number"
                  step={1000}
                  className="pc-edit"
                  value={loanAmt}
                  onChange={(e) => setLoanAmt(num(e.target.value))}
                />
              </Row>
              <div className={`pc-loan-note pc-loan-note--${loanNoteClass}`}>{loanNoteText}</div>
              <Row label="LVR — vs purchase price (%)">
                <Auto value={fmtP(lvr)} />
              </Row>
              <Row label="LVR — vs total acquisition (%)">
                <Auto value={fmtP(lvrTotal)} />
              </Row>
              <Row label="Cash required ($)">
                <Auto value={cashRequired >= 0 ? fmtD(cashRequired) : "$0 (loan covers all costs)"} />
              </Row>
              <Row label="Interest rate (p.a. %)">
                <input
                  type="number"
                  step={0.05}
                  className="pc-input"
                  value={interestRate}
                  onChange={(e) => setInterestRate(num(e.target.value))}
                />
              </Row>
              <Row label="Loan term (years)" sub="used for P&I calculation">
                <input
                  type="number"
                  min={1}
                  max={40}
                  className="pc-input"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(num(e.target.value))}
                />
              </Row>

              <div className="pc-row pc-row--toggle">
                <label className="pc-row__strong">Repayment type</label>
                <div className="pc-toggle-wrap">
                  <button
                    className={mode === "IO" ? "pc-toggle-active" : "pc-toggle-inactive"}
                    onClick={() => setMode("IO")}
                    type="button"
                  >
                    IO
                  </button>
                  <button
                    className={mode === "PI" ? "pc-toggle-active" : "pc-toggle-inactive"}
                    onClick={() => setMode("PI")}
                    type="button"
                  >
                    P&amp;I
                  </button>
                  <button
                    className={mode === "BOTH" ? "pc-toggle-active" : "pc-toggle-inactive"}
                    onClick={() => setMode("BOTH")}
                    type="button"
                  >
                    Both
                  </button>
                </div>
              </div>

              {(mode === "IO" || mode === "BOTH") && (
                <div className="pc-repay-block">
                  <div className="pc-repay-block-title">Interest only (IO)</div>
                  <div className="pc-repay-row">
                    <label>Monthly repayment ($)</label>
                    <div className="pc-repay-val">{fmtD(ioMonthly)}</div>
                  </div>
                  <div className="pc-repay-row">
                    <label>Annual repayment ($)</label>
                    <div className="pc-repay-val">{fmtD(ioAnnual)}</div>
                  </div>
                  <div className="pc-repay-note">Principal unchanged — interest charged on full loan amount</div>
                </div>
              )}

              {(mode === "PI" || mode === "BOTH") && (
                <div className="pc-repay-block">
                  <div className="pc-repay-block-title">Principal &amp; interest (P&amp;I)</div>
                  <div className="pc-repay-row">
                    <label>Monthly repayment ($)</label>
                    <div className="pc-repay-val">{fmtD(piMonthly)}</div>
                  </div>
                  <div className="pc-repay-row">
                    <label>Annual repayment ($)</label>
                    <div className="pc-repay-val">{fmtD(piAnnual)}</div>
                  </div>
                  <div className="pc-repay-note">Loan fully repaid over {loanTerm} years</div>
                </div>
              )}
            </Section>
          )}

          {showSection("F") && (
            <Section label="F" title="Yields & returns">
              <Row label="Gross yield (%)">
                <Auto value={fmtP(grossYield)} />
              </Row>
              <Row label="Net yield (%)">
                <Auto value={fmtP(netYield)} />
              </Row>
              <Row label="Net operating income ($)">
                <Auto value={fmtD(noi)} />
              </Row>
              <Row label="Annual cash flow" sub={cfLabel}>
                <Auto value={fmtD(annualCF)} />
              </Row>
              <Row label="Weekly cash flow ($)">
                <Auto value={fmtD(weeklyCF)} />
              </Row>
              <Row label="Cash-on-cash return (%)">
                <Auto value={fmtP(cocReturn)} />
              </Row>
            </Section>
          )}

          {showSection("G") && (
            <Section label="G" title="Projected value (30 June 2027)">
              <Row label="Assumed annual growth (%)">
                <input
                  type="number"
                  step={0.5}
                  className="pc-input"
                  value={growthRate}
                  onChange={(e) => setGrowthRate(num(e.target.value))}
                />
              </Row>
              <Row label="Estimated value (auto)">
                <Auto value={fmtD(estimatedReformValue)} />
              </Row>
              <Row label="Reform value ($)" sub="editable — overrides the auto estimate">
                <input
                  type="number"
                  step={1000}
                  className="pc-edit"
                  value={Math.round(reformValue)}
                  onChange={(e) => setReformOverride(num(e.target.value))}
                />
              </Row>
              {reformOverride !== null && (
                <button type="button" className="pc-reset-btn" onClick={() => setReformOverride(null)}>
                  Reset to estimate
                </button>
              )}
            </Section>
          )}

          <div className="pc-results-panel">
            <div className="pc-rt">Live results — updates instantly as you type</div>
            <div className="pc-kpi-grid">
              <div className="pc-kpi">
                <div className="pc-kl">Purchase price</div>
                <div className="pc-kv">{fmtD(purchasePrice)}</div>
              </div>
              <div className="pc-kpi">
                <div className="pc-kl">{modeLabel}</div>
                <div className="pc-kv">{fmtD(activeMonthly)}</div>
              </div>
              <div className="pc-kpi">
                <div className="pc-kl">Annual cash flow</div>
                <div className={`pc-kv ${annualCF >= 0 ? "" : "pc-neg"}`}>{fmtD(annualCF)}</div>
              </div>
              <div className="pc-kpi">
                <div className="pc-kl">Gross yield</div>
                <div className="pc-kv">{fmtP(grossYield)}</div>
              </div>
            </div>

            <div className="pc-rsub">
              <div className="pc-rb">
                <div className="pc-rbt">Returns &amp; income</div>
                <div className="pc-rr">
                  <span>Weekly cash flow</span>
                  <span className={weeklyCF >= 0 ? "" : "pc-neg"}>{fmtD(weeklyCF)}</span>
                </div>
                <div className="pc-rr">
                  <span>Net yield</span>
                  <span>{fmtP(netYield)}</span>
                </div>
                <div className="pc-rr">
                  <span>Net op. income</span>
                  <span>{fmtD(noi)}</span>
                </div>
                <div className="pc-rr">
                  <span>Cash-on-cash return</span>
                  <span>{fmtP(cocReturn)}</span>
                </div>
              </div>

              <div className="pc-rb">
                <div className="pc-rbt">Financing</div>
                <div className="pc-rr">
                  <span>Loan amount</span>
                  <span>{fmtD(loanAmt)}</span>
                </div>
                <div className="pc-rr">
                  <span>LVR (vs purchase)</span>
                  <span>{fmtP(lvr)}</span>
                </div>
                <div className="pc-rr">
                  <span>LVR (vs total acq.)</span>
                  <span>{fmtP(lvrTotal)}</span>
                </div>
                <div className="pc-rr">
                  <span>Cash required</span>
                  <span>{cashRequired >= 0 ? fmtD(cashRequired) : "$0 (fully funded)"}</span>
                </div>
              </div>

              <div className="pc-rb">
                <div className="pc-rbt">Rental income</div>
                <div className="pc-rr">
                  <span>Weekly rent</span>
                  <span>{fmtD(weeklyRent)}</span>
                </div>
                <div className="pc-rr">
                  <span>Annual gross rent</span>
                  <span>{fmtD(annualRent)}</span>
                </div>
                <div className="pc-rr">
                  <span>Annual expenses</span>
                  <span className="pc-neg">{fmtD(totalExp)}</span>
                </div>
                <div className="pc-rr">
                  <span>Vacancy rate</span>
                  <span>{fmtP(vacancyRate)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {activeFilter === "ALL" && (
          <div className="pc-export-bar pc-no-print">
            <div className="pc-export-bar__inner">
              <button type="button" className="pc-export-btn" onClick={handleExportPDF}>
                <ExportIcon />
                Export as PDF
              </button>
              <div className="pc-export-hint">Opens a printable PDF in a new tab</div>
            </div>
          </div>
        )}

        <div className="pc-footer-panels">
          <div className="pc-note-panel">
            <div className="pc-note-panel__title">Note</div>
            <ul>
              <li>The calculator does not consider acquisition costs.</li>
              <li>The calculator does not consider selling costs.</li>
              <li>
                The calculator uses a formula to estimate the property value as at 30th June 2027; however, this value
                can be adjusted in the "Reform Value" field.
              </li>
              <li>The calculator assumes the property is an established property.</li>
            </ul>
          </div>

          <div className="pc-disclaimer-panel">
            <div className="pc-disclaimer-panel__title">Disclaimer</div>
            <p>
              This calculator is for general information and educational purposes only. The results are estimates
              based on assumptions and may not reflect your actual tax position. Tax laws and budget proposals may
              change, and individual circumstances vary. Please consult your accountant or financial advisor before
              making any investment or tax decisions.
            </p>
          </div>
        </div>
      </div>

      <div className="pc-no-print">
        <div
          ref={getInTouchRef}
          id="pc-get-in-touch"
          className={`pc-get-in-touch-wrap${flashGetInTouch ? " pc-gate-flash" : ""}`}
        >
          <SimpleGetInTouch onSubmitSuccess={handleLeadCaptured} />
        </div>
        <SimpleFooter />
      </div>
    </>
  );
}
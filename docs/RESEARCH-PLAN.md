# Research Plan — Cross-Border Payment Cost Research

> **Status:** APPROVED — Decisions confirmed 2026-04-02
> **Date:** 2026-04-02
> **Project:** socialworldfirst/trade-fee-calculator (research branch)

---

## 0. Executive Summary

This plan covers the systematic research of cross-border payment costs across 8 corridors into China (US deferred), comparing WorldFirst against domestic banks and fintech providers across 7 cost dimensions. The research produces structured JSON data files and human-readable summaries that feed the trade fee calculator, brochures, SEO pages, and social content.

**Total scope:** 8 corridors × ~8 providers each × 7 dimensions = ~448 individual data points to collect, source, and confidence-rate.

**Recommended approach:** Complete GB-CNY first (strongest data, proves the pattern). Then AU, EU split by country (DE, FR, NL), then Tier 3 emerging markets. US corridor deferred pending product clarification.

### Confirmed Decisions (2026-04-02)
1. **WF FX rates:** Use handbook corridor-specific ceilings (0.5% UK, 0.67% AU, 0.75% EU, etc.) — not the 0.6% blanket figure
2. **US corridor:** Deferred — do not include until WF's US→China product availability is clarified
3. **UK banks:** Include Nationwide and TSB alongside Big 5 (7 banks total)
4. **EU corridor:** Split by country (Germany, France, Netherlands as separate corridor entries)

---

## 1. Scope Assessment

### 1.1 Corridors in Priority Order

| Priority | Corridor | Currency Pair | Rationale | Data Availability |
|----------|----------|--------------|-----------|-------------------|
| **Tier 1** | UK → China | GBP → CNY | Canton Fair priority, strongest existing data | **High** — 7 UK banks with published comparison data already sourced |
| ~~Tier 1~~ | ~~US → China~~ | ~~USD → CNY~~ | ~~Deferred — WF US product unclear~~ | ~~High~~ |
| **Tier 2** | Australia → China | AUD → CNY | Strong WF market, free local payments | **Medium-High** — Big 4 banks documented, comparison sites cover corridor |
| **Tier 2** | Germany → China | EUR → CNY | Largest EU economy, major trade corridor | **Medium-High** — Deutsche Bank, Commerzbank well-documented |
| **Tier 2** | France → China | EUR → CNY | Second EU economy, BNP Paribas HQ | **Medium** — BNP, Société Générale, Crédit Agricole |
| **Tier 2** | Netherlands → China | EUR → CNY | Major trade hub, ING/ABN AMRO HQ | **Medium-High** — ING, ABN AMRO, Rabobank |
| **Tier 3** | Turkey → China | TRY → CNY | Highest cost corridor, strong story | **Medium** — Monito corridor data, limited direct bank data |
| **Tier 3** | Nigeria → China | NGN → CNY | Emerging market, big savings gap | **Low-Medium** — mostly industry estimates, World Bank remittance data |
| **Tier 3** | Pakistan → China | PKR → CNY | Growing trade corridor | **Low** — limited published data, will rely on SBP rates + estimates |
| **Tier 3** | Vietnam → China | VND → CNY | High China trade volume, border trade | **Low-Medium** — SBV rates available, limited bank-specific data |
| **Tier 3** | Bangladesh → China | BDT → CNY | Garment industry corridor | **Low** — very limited published data |

### 1.2 Providers per Corridor

#### GB-CNY (United Kingdom)
**Category A — Banks:**
1. HSBC UK (existing data: 2.8–3.7% FX markup)
2. Barclays (existing data: ~2.75%)
3. Lloyds Banking Group (existing data: 2.4–3.6%)
4. NatWest (existing data: 2.5–4.6%)
5. Santander UK (existing data: 2.3–2.5%)

**Category B — Fintech:**
6. Wise (rate calculator available, strong comparison data)
7. OFX (UK-regulated, China corridor covered)

**Category A+ — Additional Banks:**
6. Nationwide (existing data: 1.6–2.2%)
7. TSB (existing data: 2.5–2.9%)

**Category B — Fintech:**
8. Wise (rate calculator available, strong comparison data)
9. OFX (UK-regulated, China corridor covered)

**Category C — WorldFirst:**
10. WorldFirst (handbook: 0.5% FX ceiling, £0.30 local / £4 intl, 0.40% China payment)

#### US-CNY (United States) — DEFERRED
US corridor deferred until WF's US→China product availability is clarified internally. Do not research or publish.

#### AU-CNY (Australia)
**Category A — Banks:**
1. Commonwealth Bank (CBA)
2. ANZ
3. Westpac
4. NAB

**Category B — Fintech:**
5. Wise
6. OFX (Australian-founded, strong here)

**Category C — WorldFirst:**
7. WorldFirst (handbook: 0.67% FX ceiling, free local, 0.4% capped AUD 15 intl, 0.40% China)

#### DE-CNY (Germany)
**Category A — Banks:**
1. Deutsche Bank
2. Commerzbank
3. DZ Bank (cooperative sector, largest by assets after Deutsche)

**Category B — Fintech:**
4. Wise
5. Airwallex

**Category C — WorldFirst:**
6. WorldFirst (handbook EEA tier: 0.75% FX, €0.30/txn, 0.40% China, 0.80% 1688, 1% World Card cashback)

#### FR-CNY (France)
**Category A — Banks:**
1. BNP Paribas
2. Société Générale
3. Crédit Agricole

**Category B — Fintech:**
4. Wise
5. Airwallex

**Category C — WorldFirst:**
6. WorldFirst (handbook EEA tier: 0.75% FX, €0.30/txn, 0.40% China, 0.80% 1688, 1% World Card cashback)

#### NL-CNY (Netherlands)
**Category A — Banks:**
1. ING
2. ABN AMRO
3. Rabobank

**Category B — Fintech:**
4. Wise
5. Airwallex

**Category C — WorldFirst:**
6. WorldFirst (handbook EEA tier: 0.75% FX, €0.30/txn, 0.40% China, 0.80% 1688, 1% World Card cashback)

#### TR-CNY (Turkey)
**Category A — Banks:**
1. Ziraat Bank (state-owned, largest)
2. İş Bank (İşbank)
3. Garanti BBVA

**Category B — Fintech:**
4. Wise (covers TRY→CNY)
5. Payoneer (active in Turkey)

**Category C — WorldFirst:**
6. WorldFirst (handbook: 3% FX ceiling / 0.75% majors, 0.7% payment, 0.7% 1688)

#### NG-CNY (Nigeria)
**Category A — Banks:**
1. Zenith Bank
2. First Bank of Nigeria
3. GTBank (Guaranty Trust)
4. Access Bank

**Category B — Fintech:**
5. Wise (limited NGN support — verify)
6. Payoneer

**Category C — WorldFirst:**
7. WorldFirst (handbook: 3% FX / 1.5% majors, 3% payment)

*Risk:* Nigerian bank FX data will be heavily estimated. The official CBN rate vs. parallel market rate complicates markup calculations. The Naira's multi-rate system means "FX markup" is harder to define. Will document this complexity transparently.

#### PK-CNY (Pakistan)
**Category A — Banks:**
1. Habib Bank Limited (HBL)
2. MCB Bank
3. United Bank Limited (UBL)

**Category B — Fintech:**
4. Wise (verify PKR coverage)
5. Payoneer (active in Pakistan)

**Category C — WorldFirst:**
6. WorldFirst (handbook: 3% FX / 1.5% majors, 1.5% payment)

#### VN-CNY (Vietnam)
**Category A — Banks:**
1. Vietcombank (largest by FX volume)
2. BIDV
3. Agribank

**Category B — Fintech:**
4. Wise (verify VND coverage)
5. Payoneer

**Category C — WorldFirst:**
6. WorldFirst (handbook: 1.5% FX, 0.88% payment, 0.40% China, 0.80% 1688)

*Note:* Vietnam-China border trade creates a unique dynamic — informal channels compete with formal banking. The research should note this context without attempting to price informal channels.

#### BD-CNY (Bangladesh)
**Category A — Banks:**
1. Islami Bank Bangladesh (largest private bank)
2. Sonali Bank (state-owned, largest overall)
3. BRAC Bank

**Category B — Fintech:**
4. Wise (verify BDT coverage)

**Category C — WorldFirst:**
5. WorldFirst (handbook: 3% FX / 1.5% majors, 1.5% payment)

*Risk:* Bangladesh has strict capital controls and limited published FX data for B2B. Will rely heavily on World Bank remittance cost data and industry estimates. This corridor may produce the thinnest data.

---

## 2. Estimated Scale

### 2.1 Provider Count

| Corridor | Banks | Fintech | WF | Total |
|----------|-------|---------|-----|-------|
| GB-CNY | 7 | 2 | 1 | 10 |
| AU-CNY | 4 | 2 | 1 | 7 |
| DE-CNY | 3 | 2 | 1 | 6 |
| FR-CNY | 3 | 2 | 1 | 6 |
| NL-CNY | 3 | 2 | 1 | 6 |
| TR-CNY | 3 | 2 | 1 | 6 |
| NG-CNY | 4 | 2 | 1 | 7 |
| PK-CNY | 3 | 2 | 1 | 6 |
| VN-CNY | 3 | 2 | 1 | 6 |
| BD-CNY | 3 | 1 | 1 | 5 |
| **Total** | **36** | **19** | **10** | **65** |

*(US-CNY deferred — not included in totals)*

### 2.2 Data Points

- 65 providers × 7 dimensions = **455 primary data points**
- Each data point needs: value, source URL, access date, confidence rating
- Plus per-corridor: mid-market rate benchmark, executive summary, savings analysis, compliance notes
- **Estimated total discrete data points: ~550+**

### 2.3 Research Effort per Corridor

| Corridor | Est. Web Searches | Est. Page Fetches | Relative Effort |
|----------|------------------|-------------------|-----------------|
| GB-CNY | 15–20 | 25–35 | Medium (strong existing data, 7 banks + 2 fintech) |
| AU-CNY | 15–20 | 20–30 | Medium |
| DE-CNY | 10–15 | 15–25 | Medium |
| FR-CNY | 10–15 | 15–25 | Medium |
| NL-CNY | 10–15 | 15–25 | Medium |
| TR-CNY | 15–20 | 15–25 | Medium (Monito data helps) |
| NG-CNY | 20–25 | 15–25 | High effort, low yield |
| PK-CNY | 15–20 | 10–20 | High effort, low yield |
| VN-CNY | 15–20 | 10–20 | Medium effort, low yield |
| BD-CNY | 15–20 | 10–15 | High effort, lowest yield |

### 2.4 Recommended Phasing

**Phase 1 — Pattern Establishment (GB-CNY)**
Research GB-CNY fully. 7 banks + 2 fintechs + WF. This corridor has the richest existing data and will validate the methodology, output schema, and workflow. Produce the complete JSON + markdown output. Steven reviews.

**Phase 2 — Tier 2 (AU-CNY, DE-CNY, FR-CNY, NL-CNY)**
Apply the proven pattern to Australia and EU countries. Good data availability. EU split produces three separate corridor files sharing the same WF EEA pricing but different bank landscapes.

**Phase 3 — Tier 3 Emerging Markets (TR, NG, PK, VN, BD)**
These corridors will have more gaps. The value here is in documenting the cost landscape honestly — even with estimated data — because the savings gap vs. banks is largest in these markets.

**Phase 4 — Master Outputs**
Methodology doc, source registry, data quality report, master summary JSON.

**Review gates:** Steven reviews after Phase 1 (methodology validation) and after Phase 2 (before scaling to emerging markets).

---

## 3. Methodology Preview

### 3.1 Mid-Market Rate Sources

| Corridor | Primary Source | Secondary Source |
|----------|---------------|-----------------|
| GB-CNY | XE.com GBP/CNY | Bank of England daily spot |
| AU-CNY | XE.com AUD/CNY | RBA daily rate |
| DE-CNY | XE.com EUR/CNY | ECB reference rate |
| FR-CNY | XE.com EUR/CNY | ECB reference rate |
| NL-CNY | XE.com EUR/CNY | ECB reference rate |
| TR-CNY | XE.com TRY/CNY | TCMB (Turkish Central Bank) |
| NG-CNY | XE.com NGN/CNY | CBN (Central Bank of Nigeria) official rate |
| PK-CNY | XE.com PKR/CNY | SBP (State Bank of Pakistan) |
| VN-CNY | XE.com VND/CNY | SBV (State Bank of Vietnam) |
| BD-CNY | XE.com BDT/CNY | Bangladesh Bank |

**Important:** For Nigeria, there is a significant gap between the CBN official rate and the parallel market rate. The research will use the CBN official rate as the benchmark but note the parallel market premium. This affects how "FX markup" is calculated for Nigerian banks.

### 3.2 Primary Comparison Sites

| Site | URL Pattern | Coverage | Notes |
|------|------------|----------|-------|
| Wise Compare | wise.com/gb/compare | UK, US, AU, EU, partial EM | Active rate sampling, provider-by-provider |
| Monito | monito.com/send-money/{country}/china | Most corridors | Aggregator, good EM coverage |
| XE Provider Comparison | xe.com | Major corridors | Rate comparisons |
| Exiap | exiap.com | Select corridors | Newer comparison site |
| MTC (MoneyTransferComparison) | moneytransfercomparison.com | UK focus | Good UK bank data |
| World Bank Remittance Prices | remittanceprices.worldbank.org | All corridors | Quarterly, corridor-level averages |

**Confirmed coverage gaps:**
- Monito covers TR→CNY (showed 10.4% avg total cost via banks — strong data point)
- Wise comparison may not cover NGN, PKR, BDT corridors — will verify during discovery
- World Bank data is corridor-level averages, not provider-specific — useful for validation and emerging market estimates

### 3.3 Fallback Methodology for Data Gaps

When provider-specific data is unavailable (expected for Tier 3 corridors):

1. **Use World Bank remittance cost data** for corridor-level averages and attribute as "industry estimate"
2. **Use regional banking patterns** — if we know bank markups in Turkey average 4-6%, and Pakistan has similar banking infrastructure, we can estimate Pakistan bank markups with appropriate confidence tagging
3. **Use central bank published rates** vs. bank advertised rates to calculate implied markup
4. **Document the search** — every failed search goes in the discovery log. "No data found" is a valid and useful finding

### 3.4 WorldFirst Data Approach

Per the brief: use maximum published rates for defensibility.

| Corridor | FX Ceiling (Handbook) | Research Value to Use | Rationale |
|----------|----------------------|----------------------|-----------|
| GB-CNY | 0.5% | 0.5% | Published on handbook, corridor-specific |
| AU-CNY | 0.67% | 0.67% | Published on handbook |
| DE-CNY | 0.75% | 0.75% | Published on handbook (EEA tier) |
| FR-CNY | 0.75% | 0.75% | Published on handbook (EEA tier) |
| NL-CNY | 0.75% | 0.75% | Published on handbook (EEA tier) |
| TR-CNY | 0.75% (majors) | 0.75% | Handbook: "up to 3%, 0.75% for major currencies" — CNY is major for WF |
| NG-CNY | 1.5% (majors) | 1.5% | Handbook ceiling for major currencies in P1 tier |
| PK-CNY | 1.5% (majors) | 1.5% | Same P1 tier |
| VN-CNY | 1.5% | 1.5% | Handbook corridor-specific rate |
| BD-CNY | 1.5% (majors) | 1.5% | Same P1 tier |

**DECIDED:** Use handbook corridor-specific ceilings, not the 0.6% blanket figure. These are published, precise, and more defensible.

### 3.5 Compliance Framework Confirmation

Confirmed understanding of all six BPR conditions plus FCA COBS 4 requirements:
- No misleading data (ranges with stated typical values, methodology notes)
- Like-for-like comparisons (same transfer amount, corridor, delivery method)
- Objective, verifiable, representative (every data point sourced and dated)
- No denigration (factual language per Section 8.4 of the brief)
- No confusion (no bank logos, clear distinction between providers)
- No unfair advantage from competitor reputation (nominative fair use only)
- Every corridor file includes compliance_notes with disclaimer template

---

## 4. Risks and Blockers

### 4.1 Data Risks

| Risk | Corridors Affected | Mitigation |
|------|-------------------|------------|
| Bank FX data mostly from third-party sources, not banks themselves | All | Cross-reference multiple sources, clearly state confidence level |
| Nigerian multi-rate currency system | NG-CNY | Document CBN vs. parallel rate; use CBN as benchmark with caveat |
| Emerging market bank websites often don't publish fee schedules | PK, BD, VN, NG | Rely on World Bank data + regional estimates; flag confidence as "estimated" |
| Comparison site data may be stale (sampled months ago) | All | Record access dates; cross-reference where possible; note staleness risk |
| US market WF product restrictions | US-CNY (deferred) | Corridor deferred until WF US→China product availability clarified |

### 4.2 Dependencies on Steven / Internal

| Dependency | Impact | When Needed |
|-----------|--------|-------------|
| ~~Confirm WF FX rate approach~~ | ~~Affects all corridors~~ | **RESOLVED** — using handbook corridor-specific ceilings |
| ~~Clarify US market WF product availability~~ | ~~Blocks US-CNY~~ | **RESOLVED** — US corridor deferred |
| Internal WF data for L2L transfer speeds, same-day CNY rates | Enriches speed dimension | Can be added later |
| Compliance team review of disclaimer template | Required before downstream content | After Phase 1 |

### 4.3 Corridors That May Be Too Thin

| Corridor | Assessment | Recommendation |
|----------|-----------|----------------|
| BD-CNY | Very limited published data. May produce mostly "estimated" or "unavailable" ratings. | **Proceed but set expectations.** The corridor matters (garment industry), and even thin data showing the savings gap is useful. Flag heavily. |
| PK-CNY | Limited bank-specific data. SBP publishes reference rates but individual bank markups rarely disclosed. | **Proceed.** World Bank remittance data + regional estimates will provide corridor-level picture. |
| NG-CNY | Data exists but is complicated by currency controls and parallel rates. | **Proceed with extra methodology notes.** The story here (3-8% bank markup) is strong even with estimated data. |

**No corridor recommended for skip.** Even thin data is more valuable than no data for these markets, given the savings gap is largest in emerging markets.

---

## 5. Deliverable Format

### Per Corridor
```
data/corridors/{CC}-CNY.json        — Structured data (machine-readable)
docs/corridors/{CC}-CNY.md          — Human-readable summary
logs/discovery/{CC}-CNY-discovery.md — Source discovery log
```

### Master Outputs
```
docs/RESEARCH-PLAN.md               — This document
docs/RESEARCH-METHODOLOGY.md        — Full methodology explanation
docs/SOURCE-REGISTRY.md             — Complete list of all sources used
docs/DATA-QUALITY-REPORT.md         — Confidence assessment across all corridors
data/master-summary.json            — All corridors, key metrics only
```

---

## 6. Recommendation

Here is what I propose to research, in this order, using these sources, producing these outputs:

1. **Phase 1 — GB-CNY** using existing UK bank data (7 banks incl. Nationwide + TSB) + Wise/Monito/MTC + XE mid-market rate + handbook WF data (0.5% ceiling). Produces complete JSON + markdown + discovery log. Steven reviews methodology and output quality.

2. **Phase 2 — AU-CNY, DE-CNY, FR-CNY, NL-CNY** in sequence. Good data availability. EU produces three separate corridor files with country-specific bank landscapes.

3. **Phase 3 — TR-CNY, NG-CNY, PK-CNY, VN-CNY, BD-CNY** in sequence. Expect more gaps, more estimates, but the savings story is strongest here.

4. **Phase 4 — Master outputs** (methodology doc, source registry, data quality report, master summary JSON).

**All decisions resolved. Proceeding with Phase 1 (GB-CNY).**

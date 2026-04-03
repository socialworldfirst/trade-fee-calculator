# Data Quality Report

> Cross-Border Payment Cost Research — 15 Corridors
> April 2026

## Overall Assessment

| Metric | Value |
|--------|-------|
| Corridors completed | 15 |
| Providers researched | ~80 |
| Data points collected | ~1,200+ |
| Published confidence | ~35% |
| Third-party confidence | ~40% |
| Estimated confidence | ~20% |
| Unavailable | ~5% |

## Confidence by Corridor

| Corridor | Confidence | Rationale |
|----------|-----------|-----------|
| **UK** | HIGH | 7 banks cross-referenced across 3-5 sources each. Wise 2024 study. TSB publishes per-currency margins. |
| **Australia** | MEDIUM-HIGH | Big 4 well-documented. CNY-specific snapshots from bestexchangerates.com. Strong comparison ecosystem. |
| **Germany** | MEDIUM-HIGH | ECB reference rate authoritative. Deutsche Bank/Commerzbank fees published. DZ Bank/Sparkasse vary by branch. |
| **France** | MEDIUM-HIGH | BNP, SG, CA tariffs accessible. Crédit Agricole 0.05% commission understates real cost. |
| **Netherlands** | MEDIUM-HIGH | ING's koersopslag published. ABN AMRO 5% may overstate business rates. |
| **Thailand** | MEDIUM-HIGH | BOT data accessible. Wise launching data helps. SCB/Thunes pricing confirmed. |
| **Turkey** | MEDIUM | İşbank only bank publishing live rates. CNY not listed at any bank. Monito 10.4% aggregate reliable. |
| **Vietnam** | MEDIUM | Bank fees from published tariff PDFs. No fintech comparison possible. Border trade pricing opaque. |
| **UAE** | MEDIUM | AED peg simplifies FX. Exchange house pricing competitive but not always published. |
| **Saudi Arabia** | MEDIUM | SAR peg simplifies FX. Bank fee schedules accessible. Petro-yuan data directional only. |
| **Indonesia** | MEDIUM | LCS framework documented. BCA fees published. Flip/Transfez pricing opaque. |
| **India** | MEDIUM | SBI/HDFC/ICICI documented. Wise India onboarding paused. Political context well-sourced. |
| **Nigeria** | LOW-MEDIUM | Multi-rate FX system complicates "cost" definition. Bank fees not published. Fintech pricing opaque. |
| **Pakistan** | LOW | World Bank has zero outbound data. Bank fee PDFs not publicly accessible. ICBC corporate rates inaccessible. |
| **Bangladesh** | LOW | Thinnest data. Bank PDFs unscrapable. Zero fintechs serve outbound. World Bank doesn't track. LC costs vary. |

## Key Data Gaps

1. **No bank publishes CNY-specific FX markup** in any corridor (except TSB which publishes per-currency margins). All bank CNY costs are estimated from general FX markup data or point-in-time rate snapshots.

2. **Emerging market bank fees** (Nigeria, Pakistan, Bangladesh) are published as scanned PDFs that cannot be text-extracted. Fee estimates rely on fragments, third-party reports, and industry norms.

3. **The FX risk buffer** (2-5% embedded in USD supplier prices) is directionally confirmed by multiple trade sources (Airwallex, WorldFirst, Supplyia, MultiPass, QualityInspection.org) but cannot be precisely quantified.

4. **World Bank Remittance Prices** does not track outbound corridors from Pakistan, Bangladesh, or Nigeria to China. These are structural data gaps, not research failures.

5. **Fintech pricing in emerging markets** (Pesa, Klasha, Importa Pay in Nigeria; Flip, Transfez in Indonesia) is not published transparently. Cost estimates are derived from promotional materials and comparison site data.

## Staleness Risk

FX rates change continuously. Bank fee schedules change quarterly. This research has a shelf life:
- **Mid-market rates:** Valid for date of capture only. Used for markup calculation, not as current rates.
- **Bank FX markups:** Typically stable within 0.5% for 3-6 months. Major repricing events (currency crises, regulatory changes) can shift markups significantly.
- **Transfer fees:** Typically stable for 6-12 months unless regulatory change.
- **Fintech pricing:** Can change without notice. Wise, Airwallex, OFX update dynamically.

**Planned refresh:** October 2026 (Q4).

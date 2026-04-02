# AU-CNY Discovery Log

> **Date:** 2026-04-03
> **Corridor:** Australia → China (AUD → CNY)

## Mid-Market Rate Sources

| Source | AUD/CNY Rate | AUD/USD Rate | URL | Status |
|--------|-------------|-------------|-----|--------|
| XE.com | 4.7575 | — | xe.com/currencyconverter/convert/?Amount=10000&From=AUD&To=CNY | Found |
| ExchangeRate-API | 4.77 | 0.693 | api.exchangerate-api.com/v4/latest/AUD | Found |
| Open ER-API | 4.7677 | 0.6931 | open.er-api.com/v6/latest/AUD | Found |
| RBA | — | — | rba.gov.au/statistics/frequency/exchange-rates.html | JS-rendered, no data extracted |

**Consensus: 1 AUD = 4.76 CNY | 1 AUD = 0.693 USD**

## Currency Composition Sources

| Source | URL | Data Found |
|--------|-----|-----------|
| ABS Export/Import Invoice Currencies 2023-24 | abs.gov.au/articles/export-and-import-invoice-currencies-2023-24 | USD 55.7% all imports, 77.5% imports from China. CNY 1.4% all, ~2-3% from China. |
| ABS 2020-21 data | abs.gov.au/articles/export-and-import-invoice-currencies-2020-21 | 6-year averages for China-specific trade |
| SWIFT RMB Tracker | swift.com/products/renminbi-tracker/document-centre | Australia ranks 10th offshore RMB centre (0.40% share) |
| RBA bilateral swap agreement | rba.gov.au/media-releases/2015/mr-15-06.html | RBA-PBoC swap since 2012, renewed 2015 |
| BHP RMB iron ore deal | discoveryalert.com.au, steelorbis.com | BHP settling ~30% spot iron ore in RMB (Q4 2025) |
| University of Sydney/The Conversation | theconversation.com | Australian banks not ready for RMB settlement |
| BBVA Research | bbvaresearch.com | ~40% China external trade in RMB by Q4 2024 |

## Bank Data Sources

### CBA
| Source | URL | Data Found |
|--------|-----|-----------|
| CBA International Fees | commbank.com.au/international/fees-charges.html | $0 online FX, $30 branch, $22 AUD-AUD, correspondent fees by currency |
| BestExchangeRates CBA-CNY | bestexchangerates.com/rates/commbank-aud-to-cny | -8.8% below mid-market (4.3403 vs 4.7581) |
| Airwallex CBA analysis | airwallex.com/au/blog | 4-5% general markup |
| moneytransfer.com.au CBA | moneytransfer.com.au/banks/commbank | 4.18% on $50k, 4.7% avg on $10k |

### ANZ
| Source | URL | Data Found |
|--------|-----|-----------|
| ANZ International Payments | anz.com.au/personal/travel-international/international-payments | $0-9 online FX, $32 phone, correspondent fees covered for 7 currencies |
| ANZ CNY restrictions | anz.com.au (payment page) | Personal-to-personal only, USD 50k/yr cap, English name required |
| ANZ CIPS participation | bankingday.com, CSIS | Direct CIPS participant since 2015 |
| moneytransfer.com.au ANZ | moneytransfer.com.au/banks/anz | 3.75% FX markup |

### Westpac
| Source | URL | Data Found |
|--------|-----|-----------|
| Westpac International | westpac.com.au | $0 online FX, $32 branch, $12 receiving fee |
| BestExchangeRates Westpac-CNY | bestexchangerates.com/rates/westpac-aud-to-cny | -1.8% (may reflect business-only pricing) |
| Westpac China exit | caixinglobal.com, globaltimes.cn | Exited Shanghai/Beijing 2020, HK 2023 |
| Westpac CNY restriction | westpac.com.au | BUSINESS ONLY for CNY — personal blocked |

### NAB
| Source | URL | Data Found |
|--------|-----|-----------|
| NAB International Transfer Info | nab.com.au/personal/international-banking/transfer-money-overseas | $0 online FX, $30 branch/AUD, absorbs ALL correspondent fees |
| BestExchangeRates NAB-CNY | bestexchangerates.com/rates/nab-aud-to-cny | -10.4% to -12.9% below mid-market |
| moneytransfer.com.au NAB | moneytransfer.com.au/banks/nab | 2.54% general markup (best Big 4), 39 currencies |
| NAB China presence | nab.com.au, news.nab.com.au | In China since 1982, Shanghai branch |

## Fintech Data Sources

### Wise
| Source | URL | Data Found |
|--------|-----|-----------|
| Wise AUD-CNY pricing | wise.com/au/send-money/send-money-to-china | 0% markup, ~$13.42 fee on $1k |
| Wise AUD-CNY converter | wise.com/au/currency-converter/aud-to-cny-rate?amount=1000 | Live comparison vs 5 providers |
| thecurrencyshop.com.au Wise | thecurrencyshop.com.au/guides/wise-fees | Fee structure breakdown |

### OFX
| Source | URL | Data Found |
|--------|-----|-----------|
| OFX AU fees | ofx.com/en-au/faqs/are-there-any-transfer-fees/ | $15 under $10k, $0 over $10k |
| thecurrencyshop.com.au OFX | thecurrencyshop.com.au/reviews/ofx | 0.4-1.9% range, 25+ year history |

### Airwallex
| Source | URL | Data Found |
|--------|-----|-----------|
| Airwallex AU pricing | airwallex.com/au/ | 0.5% major, 1.0% non-major |
| Airwallex China guide | help.airwallex.com/hc/en-gb/articles/4633986370447 | Local CNY restrictions, SWIFT available |
| WeAreFounders pricing | wearefounders.uk/airwallex-pricing-2026 | Account tiers, enterprise rates |

### TorFX
| Source | URL | Data Found |
|--------|-----|-----------|
| TorFX AU | torfx.com.au | $0 fees, AFSL 246838 |
| thecurrencyshop.com.au TorFX | thecurrencyshop.com.au | 0.88% markup on AUD-CNY $10k |
| comparethemarket.com.au | comparethemarket.com.au | $50k online limit, no limit by phone |

### Remitly
| Source | URL | Data Found |
|--------|-----|-----------|
| Remitly AU-China | remitly.com/au/en/china | $2.99 express fee, ~1.07-1.3% markup |
| Wise comparison | wise.com/au/compare/remitly-exchange-rate | Rate comparison data |

### InstaReM
| Source | URL | Data Found |
|--------|-----|-----------|
| InstaReM/Nium AU | instarem.com | 0.25-1% fee, 0-0.6% markup |
| finder.com.au InstaReM | finder.com.au | $200 min, $20k max card, AFSL holder |

### XE
| Source | URL | Data Found |
|--------|-----|-----------|
| XE AU-China | xe.com/en-us/send-money/send-money-to-china/ | $0 bank fee, 1-4 days, $750k limit |

### WorldRemit
| Source | URL | Data Found |
|--------|-----|-----------|
| WorldRemit AU-China | worldremit.com/en-au/china | $3.99 fee, 0.5-4% markup, $10k max |

## Comparison Sites Used
| Site | URL | Value |
|------|-----|-------|
| thecurrencyshop.com.au | thecurrencyshop.com.au | Best AU comparison site — live rate comparisons, per-provider reviews |
| moneytransfer.com.au | moneytransfer.com.au/banks | Big 4 bank comparisons with measured markups |
| finder.com.au | finder.com.au | Provider reviews, fee comparisons |
| canstar.com.au | canstar.com.au | Provider ratings |
| bestexchangerates.com | bestexchangerates.com | Live bank rate comparisons by currency pair |
| comparethemarket.com.au | comparethemarket.com.au | TorFX and other provider reviews |
| corporatealliance.com | corporatealliance.com | Forward contract pricing across providers |

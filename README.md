# Trade Avata AI Analytics

Standalone staging repository for the Trade Avata Analytics / AI Analytics module.

## Included
- Analytics dashboard
- Performance
- Trades
- Calendar
- Strategies
- Risk
- Comparisons
- Bookkeeping
- Insights
- AI Analytics evidence engine
- Reports
- Downloads
- Accounts
- Dashboard customization

## Important
This repository is intentionally self-contained so it can build without the main Trade Avata Firebase project.

The demo data is in `src/lib/analytics/demo.js`.
The AI evidence layer is in `src/lib/analytics/ai.js`.
The standalone auth/layout adapters are in `src/lib/firebase/`.

When this module is integrated into the main Trade Avata application, the standalone adapters can be replaced with the production Firebase adapters.

## Build
```bash
npm install
npm run build
```

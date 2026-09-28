/**
 * Trade Avata normalized analytics contract.
 *
 * Provider adapters (MT4/MT5/cTrader/etc.) should map source responses into
 * these shapes before the analytics UI consumes them. The UI must never infer
 * REAL/DEMO/CONTEST from user input.
 */

export const accountSchema = {
  id: 'string',
  source: { platform: 'string', provider: 'string', connectionId: 'string' },
  identity: { accountName: 'string|null', traderName: 'string|null', loginMasked: 'string|null' },
  environment: 'REAL|DEMO|CONTEST|UNCONFIRMED',
  currency: 'string|null',
  leverage: 'string|number|null',
  balance: 'number|null',
  equity: 'number|null',
  lastSyncAt: 'timestamp|null'
};

export const tradeSchema = {
  id: 'string',
  accountId: 'string',
  openedAt: 'timestamp',
  closedAt: 'timestamp|null',
  symbol: 'string',
  side: 'BUY|SELL',
  volume: 'number',
  entryPrice: 'number|null',
  exitPrice: 'number|null',
  grossPnl: 'number|null',
  netPnl: 'number|null',
  fees: 'number|null',
  swap: 'number|null',
  pips: 'number|null',
  riskR: 'number|null',
  mfeR: 'number|null',
  maeR: 'number|null',
  holdingMinutes: 'number|null',
  strategy: 'string|null',
  tags: 'string[]',
  session: 'string|null'
};

export const bookkeepingSchema = {
  id: 'string',
  accountId: 'string',
  occurredAt: 'timestamp',
  type: 'DEPOSIT|WITHDRAWAL|FEE|SWAP|ADJUSTMENT|TRADING_PNL',
  amount: 'number',
  currency: 'string|null',
  description: 'string|null',
  source: 'provider|manual'
};

export const insightRule = {
  id: 'string',
  title: 'string',
  detail: 'string',
  dimensions: 'string[]',
  evidence: 'object',
  generatedAt: 'timestamp'
};

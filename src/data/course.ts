/**
 * THE COURSE
 * ---------------------------------------------------------------------------
 * Shefa Forex Academy offers ONE comprehensive course. One enrolment and one
 * payment cover every module, from beginner to advanced. There are no separate
 * level purchases. Fee and duration live in src/config/academy.ts.
 */

export interface Module {
  number: number
  title: string
  stage: 'Foundation' | 'Intermediate' | 'Advanced' | 'Professional'
  summary: string
  topics: string[]
}

export const course = {
  slug: 'shefa-forex-trading-mastery',
  title: 'Shefa Forex Trading Mastery',
  level: 'Beginner to Advanced',
  enrolmentLabel: 'Shefa Forex Trading Mastery — Beginner to Advanced',
  statement: 'One course. One payment. All levels included.',
  description:
    'A single structured programme that takes you from understanding how the forex market works to building and testing your own trading strategy. You enrol once and move through every module in order. Intermediate and advanced content is part of the same course, so there is nothing extra to buy as you progress.',
  journey: [
    'Forex Foundations',
    'Technical Analysis',
    'Intermediate Strategies',
    'Advanced Trading',
    'Liquidity and Price Delivery',
    'Risk Management',
    'Trading Psychology',
    'Professional Development',
  ],
  objectives: [
    'Explain how the forex market works, including pairs, pips, lots, spreads and leverage.',
    'Read candlestick charts and identify market structure, support and resistance, and trend.',
    'Build and refine trading strategies using price action and trading sessions.',
    'Read liquidity, fair value gaps and order blocks on a chart.',
    'Size positions, place stop losses and plan risk before every trade.',
    'Manage emotions, avoid overtrading and keep a trading journal.',
    'Backtest a strategy and document it as a written trading plan.',
  ],
  whoShouldEnrol: [
    'Beginners who want a structured start instead of piecing information together online.',
    'Traders with some experience who want to fill gaps in technical analysis and risk management.',
    'Experienced traders who want to study price action and liquidity in depth.',
    'Students interested in financial markets who want practical, disciplined education.',
  ],
  skills: [
    'Technical chart analysis',
    'Market structure reading',
    'Risk and position sizing',
    'Strategy development',
    'Backtesting',
    'Trading discipline',
    'Journalling and review',
    'Trading plan writing',
  ],
}

export const modules: Module[] = [
  {
    number: 1,
    title: 'Forex Foundations',
    stage: 'Foundation',
    summary: 'The vocabulary and mechanics of the forex market, from your first chart to your first platform.',
    topics: [
      'Introduction to forex',
      'Currency pairs',
      'Pips and lots',
      'Spreads and leverage',
      'Trading platforms',
      'Candlestick charts',
      'Basic market analysis',
    ],
  },
  {
    number: 2,
    title: 'Technical Analysis and Market Structure',
    stage: 'Foundation',
    summary: 'How to read price: structure, trend and the levels where the market reacts.',
    topics: [
      'Market structure',
      'Support and resistance',
      'Trend analysis',
      'Technical indicators',
      'Multiple timeframe analysis',
    ],
  },
  {
    number: 3,
    title: 'Intermediate Trading Strategies',
    stage: 'Intermediate',
    summary: 'Turning analysis into repeatable strategies, with attention to timing and news.',
    topics: [
      'Price action strategies',
      'Trading sessions',
      'Economic news',
      'Trade entries and exits',
      'Strategy development basics',
    ],
  },
  {
    number: 4,
    title: 'Advanced Price Action',
    stage: 'Advanced',
    summary: 'A deeper study of how price moves, including where orders gather and why price reverses.',
    topics: ['Advanced price action', 'Liquidity concepts', 'Reading context across timeframes'],
  },
  {
    number: 5,
    title: 'Liquidity and Price Delivery',
    stage: 'Advanced',
    summary: 'How liquidity, imbalances and session timing show up on the chart.',
    topics: [
      'Market structure',
      'Liquidity',
      'Fair value gaps',
      'Order blocks',
      'Trading sessions',
      'Premium and discount',
      'Strategy development',
    ],
  },
  {
    number: 6,
    title: 'Forex Risk Management',
    stage: 'Professional',
    summary: 'The habits that protect your capital so you can keep trading through losing periods.',
    topics: [
      'Position sizing',
      'Stop loss placement',
      'Risk-to-reward',
      'Capital preservation',
      'Trading discipline',
      'Risk management planning',
    ],
  },
  {
    number: 7,
    title: 'Trading Psychology and Discipline',
    stage: 'Professional',
    summary: 'Managing the emotions that drive most trading mistakes.',
    topics: [
      'Emotional control',
      'Managing losses',
      'Avoiding overtrading',
      'Developing consistency',
      'Trading journals',
    ],
  },
  {
    number: 8,
    title: 'Backtesting and Strategy Development',
    stage: 'Professional',
    summary: 'Testing ideas against historical charts before you rely on them.',
    topics: [
      'Backtesting methods',
      'Recording and reviewing results',
      'Refining a strategy',
      'Documenting a trading plan',
    ],
  },
  {
    number: 9,
    title: 'Professional Trading Development',
    stage: 'Professional',
    summary: 'Bringing everything together into a disciplined, long-term approach to trading.',
    topics: [
      'Building a complete trading plan',
      'Routine and review',
      'Continuous learning',
      'Responsible trading practices',
    ],
  },
]

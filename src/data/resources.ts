/**
 * RESOURCE LIBRARY
 * ---------------------------------------------------------------------------
 * Sample educational articles stored locally. To add an article, copy one entry,
 * give it a new unique `slug`, and write its paragraphs. No backend is needed.
 */

export type ResourceCategory =
  | 'Forex Terminology'
  | 'Risk Management'
  | 'Trading Psychology'
  | 'Market Structure'
  | 'Technical Analysis'
  | 'Trading Discipline'

export interface Resource {
  slug: string
  title: string
  category: ResourceCategory
  description: string
  paragraphs: string[]
}

export const resourceCategories: ResourceCategory[] = [
  'Forex Terminology',
  'Risk Management',
  'Trading Psychology',
  'Market Structure',
  'Technical Analysis',
  'Trading Discipline',
]

export const resources: Resource[] = [
  {
    slug: 'pips-lots-and-spreads',
    title: 'Pips, Lots and Spreads Explained',
    category: 'Forex Terminology',
    description: 'Three terms every trader meets on day one, and how they affect the cost and size of a trade.',
    paragraphs: [
      'A pip is the standard unit used to measure price movement in a currency pair. For most pairs it is the fourth decimal place, so a move from 1.1000 to 1.1001 is one pip. For pairs that include the Japanese yen it is usually the second decimal place.',
      'A lot is the size of a trade. A standard lot is 100,000 units of the base currency, a mini lot is 10,000 and a micro lot is 1,000. The lot size, together with the number of pips price moves, decides how much money a trade gains or loses.',
      'The spread is the difference between the price you can buy at and the price you can sell at. It is a cost you pay on every trade, so a wider spread means price must move further in your favour before the trade is in profit.',
      'Learning these three terms first makes everything else easier to follow, especially position sizing, which depends on all of them.',
    ],
  },
  {
    slug: 'risk-per-trade',
    title: 'Why Risk Per Trade Comes Before Strategy',
    category: 'Risk Management',
    description: 'A simple rule for limiting how much of your account any single trade can cost.',
    paragraphs: [
      'Every strategy has losing trades. What decides whether a trader survives is how large those losses are compared with the account.',
      'Many educators teach risking a small, fixed percentage of the account on each trade, often one or two percent. The exact figure is a personal decision, but the principle is that no single trade should be able to do serious damage.',
      'Position size follows from that rule. You decide how much money you are willing to lose, measure the distance in pips from your entry to your stop loss, and choose a lot size so that hitting the stop costs only that amount.',
      'Fixing risk in advance also helps your psychology. When a loss is already planned and affordable, it is easier to accept it calmly and move on to the next opportunity.',
    ],
  },
  {
    slug: 'managing-losing-streaks',
    title: 'Managing a Losing Streak',
    category: 'Trading Psychology',
    description: 'Losing streaks are normal. The danger is what traders do in response to them.',
    paragraphs: [
      'Even a well-tested strategy produces runs of losing trades. Knowing this in advance makes a streak less of a shock when it arrives.',
      'The most common mistake after losses is trying to win the money back quickly. Traders increase their lot size, take lower-quality setups or ignore their rules. These actions usually deepen the losses.',
      'A practical response is to set a daily or weekly loss limit and stop trading when it is reached. Use the time away to review your journal and check whether you followed your plan, rather than whether each trade won.',
      'If you followed your rules and still lost, that is variance. If you broke your rules, that is the problem to fix.',
    ],
  },
  {
    slug: 'reading-market-structure',
    title: 'Reading Market Structure',
    category: 'Market Structure',
    description: 'How swing highs and swing lows describe whether a market is trending or changing direction.',
    paragraphs: [
      'Market structure is the pattern of swing highs and swing lows on a chart. In an uptrend, price makes higher highs and higher lows. In a downtrend, it makes lower highs and lower lows.',
      'A break of structure happens when price moves beyond the most recent swing in the direction of the trend, which suggests the trend is continuing. A change of character happens when price breaks a swing in the opposite direction, which is an early sign the trend may be turning.',
      'Structure looks different on each timeframe, so traders usually read a higher timeframe for direction and a lower one for timing. Agreeing on direction across timeframes avoids trading against a larger move.',
      'Structure is the base for many later topics, including liquidity, order blocks and fair value gaps.',
    ],
  },
  {
    slug: 'support-and-resistance',
    title: 'Support and Resistance: The Basics',
    category: 'Technical Analysis',
    description: 'Why price often reacts at the same levels, and how to mark them sensibly.',
    paragraphs: [
      'Support is a price area where buying has previously been strong enough to stop a decline. Resistance is an area where selling has previously stopped a rise. Traders mark these areas because price often reacts there again.',
      'It helps to treat levels as zones rather than exact lines. Price rarely turns at precisely the same number, so a band around the level is more realistic.',
      'Levels that have been tested several times and that appear on higher timeframes tend to matter more than minor levels on small timeframes.',
      'No level guarantees a reaction. Support and resistance show where to pay attention, and the decision to trade should still follow your plan and your risk rules.',
    ],
  },
  {
    slug: 'keeping-a-trading-journal',
    title: 'How to Keep a Trading Journal',
    category: 'Trading Discipline',
    description: 'What to record on every trade so you can learn from your own results.',
    paragraphs: [
      'A trading journal is a written record of your trades and the thinking behind them. It turns experience into evidence you can study.',
      'For each trade, note the date and session, the pair, the direction, your reason for entering, the entry, stop loss and target, the amount risked, and the result. Add a screenshot of the chart if you can.',
      'Also record how you felt and whether you followed your rules. Patterns in behaviour, such as trading after a loss or entering early, often explain results better than the strategy does.',
      'Review the journal on a fixed schedule, such as every weekend. Look for what repeats, then change one thing at a time.',
    ],
  },
]

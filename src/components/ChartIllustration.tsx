/** A hand-drawn teaching chart (not live data and not a trade recommendation). */

// Each candle is [open, close, high, low].
const CANDLES: [number, number, number, number][] = [
  [40, 44, 46, 39], [44, 47, 49, 43], [47, 45, 49, 44], [45, 50, 52, 44], [50, 53, 55, 49],
  [53, 52, 56, 51], [52, 57, 58, 51], [57, 60, 62, 56], [60, 58, 62, 57], [58, 63, 64, 57],
  [63, 66, 68, 62], [66, 64, 68, 63], [64, 67, 69, 63], [67, 66, 69, 65], [68, 69, 69.5, 67],
  [69, 73, 75, 68], [73, 71, 74, 70], [71, 62, 71.5, 61], [62, 54, 63, 53], [54, 52, 56, 50],
  [52, 56, 58, 51], [56, 60, 62, 55], [60, 65, 66, 59], [65, 67, 69, 64], [67, 60, 68, 59],
  [60, 52, 61, 51], [52, 46, 53, 45], [46, 40, 47, 39], [40, 36, 41, 35], [36, 38, 40, 35],
]

const X0 = 16
const X1 = 544
const Y0 = 24
const Y1 = 352
const PMIN = 32
const PMAX = 78
const STEP = (X1 - X0) / CANDLES.length
const BODY = 9
const cx = (i: number) => X0 + STEP * (i - 0.5)
const py = (p: number) => Y0 + ((PMAX - p) / (PMAX - PMIN)) * (Y1 - Y0)

const BULL = '#2fa98c'
const BEAR = '#e0654f'
const GOLD = '#3e6ae1'

const markers: [number, number, number][] = [
  [1, cx(12.5), py(69.5) - 22],
  [2, cx(16), py(75) - 20],
  [3, cx(20.6), py(66.5)],
  [4, cx(27.2), py(68)],
  [5, cx(27.6), py(35) + 22],
]

export const chartLegend = [
  ['Buy-side liquidity', 'Equal highs where stop orders rest above price.'],
  ['Sweep', 'Price takes the highs, then closes back below them.'],
  ['Displacement', 'A fast move down leaves a fair value gap.'],
  ['Retrace', 'Price returns to the gap and is rejected.'],
  ['Draw on liquidity', 'The move runs to the lows below.'],
]

export default function ChartIllustration() {
  return (
    <svg
      viewBox="0 0 560 380"
      className="block h-auto w-full max-w-full"
      role="img"
      aria-label="Illustrative candlestick chart showing buy-side liquidity, a sweep of the highs, a fair value gap after a fast move down, a retrace into the gap, and a move to the lows."
    >
      {[0, 1, 2, 3, 4].map((i) => {
        const y = Y0 + (i * (Y1 - Y0)) / 4
        return <line key={i} x1={X0} x2={X1} y1={y} y2={y} stroke="rgba(150,170,210,0.12)" />
      })}
      <rect x={cx(16) - STEP / 2} y={py(73)} width={cx(24) - cx(16) + STEP} height={py(69) - py(73)} fill="rgba(111,160,232,0.2)" stroke="#6fa0e8" />
      <rect x={cx(17) - STEP / 2} y={py(70)} width={cx(25) - cx(17) + STEP} height={py(63) - py(70)} fill="rgba(212,175,55,0.22)" stroke={GOLD} strokeDasharray="3 3" />
      <line x1={cx(11)} x2={cx(17)} y1={py(69.5)} y2={py(69.5)} stroke={GOLD} strokeWidth="1.3" strokeDasharray="5 4" />
      <line x1={cx(1)} x2={cx(30)} y1={py(39)} y2={py(39)} stroke="#8fa3c8" strokeWidth="1.3" strokeDasharray="5 4" />
      {CANDLES.map(([o, c, h, l], k) => {
        const x = cx(k + 1)
        const color = c >= o ? BULL : BEAR
        const top = py(Math.max(o, c))
        const height = Math.max(1.5, Math.abs(py(o) - py(c)))
        return (
          <g key={k}>
            <line x1={x} x2={x} y1={py(h)} y2={py(l)} stroke={color} strokeWidth="1.4" />
            <rect x={x - BODY / 2} y={top} width={BODY} height={height} fill={color} />
          </g>
        )
      })}
      {markers.map(([n, x, y]) => (
        <g key={n}>
          <circle cx={x} cy={y} r="13" fill="#FFFFFF" stroke="#0E1A33" strokeWidth="2" />
          <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fill="#171a20" fontFamily="JetBrains Mono, monospace" fontWeight="600" fontSize="14">
            {n}
          </text>
        </g>
      ))}
    </svg>
  )
}

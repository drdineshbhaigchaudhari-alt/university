import Counter from './Counter.jsx'

/**
 * A row of animated statistic tiles.
 *
 * Each item is either `{ value: number, decimals, prefix, suffix, label }` —
 * which animates — or `{ value: 'A++', label }`, which renders as-is. That
 * distinction matters: a grade or a rank band should not count up from zero.
 */
export function Stats({ items, columns }) {
  const className = columns === 3 ? 'stats stats--3' : 'stats'
  return (
    <div className={className} style={columns === 2 ? { gridTemplateColumns: 'repeat(2,1fr)' } : undefined}>
      {items.map((item) => (
        <div className="stat" key={item.label}>
          <span className="stat__num">
            {typeof item.value === 'number' ? (
              <Counter
                value={item.value}
                decimals={item.decimals || 0}
                prefix={item.prefix || ''}
                suffix={item.suffix || ''}
              />
            ) : (
              renderStatic(item.value)
            )}
          </span>
          <span className="stat__lab">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

/** "A++" renders its plus signs as a superscript, matching the print style. */
function renderStatic(value) {
  const match = /^([A-Za-z0-9]+)(\+{1,3})$/.exec(String(value))
  if (!match) return value
  return (
    <>
      {match[1]}
      <sup>{match[2]}</sup>
    </>
  )
}

/** Compact bordered strip — used where a stat row would be too loud. */
export function MetricRow({ items, columns }) {
  const style = columns ? { gridTemplateColumns: `repeat(${columns},1fr)` } : undefined
  return (
    <div className="metric-row" style={style}>
      {items.map((item) => (
        <div className="metric" key={item.label}>
          <b>{item.value}</b>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

/** The teal band of headline figures that sits directly under a hero. */
export function HeroStrip({ items }) {
  return (
    <section className="hero-strip">
      <div className="wrap">
        {items.map((item) => (
          <div className="hero-strip__cell" key={item.label}>
            <span className="hero-strip__num">
              {typeof item.value === 'number' ? (
                <Counter
                  value={item.value}
                  decimals={item.decimals || 0}
                  prefix={item.prefix || ''}
                  suffix={item.suffix || ''}
                />
              ) : (
                item.value
              )}
            </span>
            <span className="hero-strip__lab">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

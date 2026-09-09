import { useId, useState } from 'react'

/**
 * Accessible tab set following the ARIA authoring practice: roving tabindex,
 * arrow-key navigation, and panels wired to their tabs by id.
 *
 * @param {{id:string,label:React.ReactNode,render:() => React.ReactNode}[]} tabs
 */
export default function Tabs({ tabs, label = 'Tabs', initial }) {
  const uid = useId().replace(/:/g, '')
  const [selected, setSelected] = useState(initial || tabs[0]?.id)

  function onKeyDown(event, index) {
    const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0
    if (!step) return
    event.preventDefault()
    const next = tabs[(index + step + tabs.length) % tabs.length]
    setSelected(next.id)
    document.getElementById(`${uid}-tab-${next.id}`)?.focus()
  }

  return (
    <div>
      <div className="tabs__list" role="tablist" aria-label={label}>
        {tabs.map((tab, index) => {
          const isSelected = tab.id === selected
          return (
            <button
              key={tab.id}
              id={`${uid}-tab-${tab.id}`}
              className="tabs__btn"
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`${uid}-panel-${tab.id}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setSelected(tab.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={`${uid}-panel-${tab.id}`}
          className="tabs__panel"
          role="tabpanel"
          aria-labelledby={`${uid}-tab-${tab.id}`}
          hidden={tab.id !== selected}
        >
          {tab.id === selected ? tab.render() : null}
        </div>
      ))}
    </div>
  )
}

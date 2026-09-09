import { useId, useState } from 'react'

/**
 * Disclosure list. `single` closes the other panels when one opens, which is
 * the right behaviour for an FAQ; leave it off for reference content where a
 * reader may want two panels side by side.
 *
 * @param {{q:React.ReactNode,a:React.ReactNode}[]} items
 */
export default function Accordion({ items, single = true, openFirst = true }) {
  const uid = useId().replace(/:/g, '')
  const [open, setOpen] = useState(() => (openFirst ? [0] : []))

  function toggle(index) {
    setOpen((current) => {
      const isOpen = current.includes(index)
      if (single) return isOpen ? [] : [index]
      return isOpen ? current.filter((i) => i !== index) : [...current, index]
    })
  }

  return (
    <div className="acc">
      {items.map((item, index) => {
        const isOpen = open.includes(index)
        const panelId = `${uid}-panel-${index}`
        return (
          <div className="acc__item" key={index}>
            <h3 style={{ margin: 0 }}>
              <button
                className="acc__btn"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                {item.q}
                <span className="sign" aria-hidden="true" />
              </button>
            </h3>
            <div className="acc__panel" id={panelId} hidden={!isOpen}>
              {typeof item.a === 'string' ? <p>{item.a}</p> : item.a}
            </div>
          </div>
        )
      })}
    </div>
  )
}

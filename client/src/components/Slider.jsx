import { useRef } from 'react'

/**
 * Horizontal scroll-snap carousel.
 *
 * Native overflow scrolling does the work, so it stays usable with a
 * trackpad, a touch swipe or the keyboard; the buttons only nudge the
 * scroll position by one card. Nothing breaks if JavaScript is slow to
 * arrive — the track is already scrollable.
 */
export default function Slider({ children, label = 'Carousel' }) {
  const track = useRef(null)

  function scrollByCard(direction) {
    const node = track.current
    if (!node) return
    const first = node.firstElementChild
    const gap = parseFloat(getComputedStyle(node).columnGap || '24') || 24
    const step = first ? first.getBoundingClientRect().width + gap : node.clientWidth * 0.8
    node.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <div className="slider">
      <div className="slider__track" ref={track} tabIndex={0} role="group" aria-label={label}>
        {children}
      </div>
      <div className="slider__nav">
        <button
          className="slider__btn"
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label={`Previous — ${label}`}
        >
          &#8592;
        </button>
        <button
          className="slider__btn"
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label={`Next — ${label}`}
        >
          &#8594;
        </button>
      </div>
    </div>
  )
}

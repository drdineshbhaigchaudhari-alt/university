import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/**
 * Full-width, full-opacity Hero Slider with rich text structure,
 * custom badges, brush highlights, custom pill buttons, and smooth transitions.
 */
export default function HeroSlider({ slides }) {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const total = slides?.length || 0

  useEffect(() => {
    if (total <= 1) return
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, 6000)

    return () => clearInterval(timerRef.current)
  }, [total, current])

  function goTo(index) {
    setCurrent((index + total) % total)
  }

  function handlePrev() {
    goTo(current - 1)
  }

  function handleNext() {
    goTo(current + 1)
  }

  if (!slides || slides.length === 0) return null

  return (
    <section
      className="hero-slider"
      aria-roledescription="carousel"
      aria-label="Campus Highlights"
    >
      {/* Background slide images with 100% full opacity */}
      <div className="hero-slider__media-track">
        {slides.map((slide, idx) => (
          <div
            key={slide.id || idx}
            className={`hero-slider__media ${idx === current ? 'is-active' : ''}`}
            aria-hidden={idx !== current}
          >
            <img
              src={slide.image}
              alt={slide.imageAlt || ''}
              width="1440"
              height="800"
              loading={idx === 0 ? 'eager' : 'lazy'}
              fetchpriority={idx === 0 ? 'high' : 'auto'}
            />
          </div>
        ))}
      </div>

      {/* Gentle left feathering for text contrast — right side is 100% clear */}
      <div className="hero-slider__scrim" aria-hidden="true" />

      {/* Foreground Content - Full width layout, not confined to a container */}
      <div className="hero-slider__content-wrap">
          {slides.map((slide, idx) => {
            const isActive = idx === current
            return (
              <div
                key={slide.id || idx}
                className={`hero-slider__slide-content ${isActive ? 'is-active' : ''}`}
                aria-hidden={!isActive}
              >
                {/* Kicker badge */}
                {slide.kicker ? (
                  slide.kickerTo ? (
                    <Link className="hero-slider__kicker" to={slide.kickerTo}>
                      {slide.kickerIcon ? (
                        <span className="hero-slider__kicker-icon">{slide.kickerIcon}</span>
                      ) : (
                        <span className="hero-slider__kicker-dot" />
                      )}
                      <span>{slide.kicker}</span>
                    </Link>
                  ) : (
                    <div className="hero-slider__kicker">
                      {slide.kickerIcon ? (
                        <span className="hero-slider__kicker-icon">{slide.kickerIcon}</span>
                      ) : (
                        <span className="hero-slider__kicker-dot" />
                      )}
                      <span>{slide.kicker}</span>
                    </div>
                  )
                ) : null}

                {/* Main Headline */}
                <h1 className="hero-slider__title">{slide.title}</h1>

                {/* Description lead */}
                {slide.lead ? <p className="hero-slider__lead">{slide.lead}</p> : null}

                {/* Call to action buttons */}
                <div className="hero-slider__actions">
                  {slide.primaryBtn ? (
                    <Link className="hero-slider__btn-primary" to={slide.primaryBtn.to}>
                      <span>{slide.primaryBtn.text}</span>
                      <span className="hero-slider__btn-icon" aria-hidden="true">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                  ) : null}

                  {slide.secondaryBtn ? (
                    <Link className="hero-slider__btn-secondary" to={slide.secondaryBtn.to}>
                      <span>{slide.secondaryBtn.text}</span>
                      <span className="hero-slider__arrow-icon" aria-hidden="true">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                  ) : null}
                </div>

                {/* Slide notes / stats */}
                {slide.notes && slide.notes.length > 0 ? (
                  <div className="hero-slider__notes">
                    {slide.notes.map((note) => (
                      <span key={note.label} className="hero-slider__note-item">
                        <b>{note.label}</b> {note.value}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>

      {/* Navigation arrows */}
      {total > 1 ? (
        <div className="hero-slider__nav-arrows">
          <button
            type="button"
            className="hero-slider__arrow hero-slider__arrow--prev"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            &#8592;
          </button>
          <button
            type="button"
            className="hero-slider__arrow hero-slider__arrow--next"
            onClick={handleNext}
            aria-label="Next slide"
          >
            &#8594;
          </button>
        </div>
      ) : null}

      {/* Pagination indicators / dots */}
      {total > 1 ? (
        <div className="hero-slider__indicators" role="tablist" aria-label="Slides">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={idx === current}
              aria-label={`Slide ${idx + 1}`}
              className={`hero-slider__dot ${idx === current ? 'is-active' : ''}`}
              onClick={() => goTo(idx)}
            />
          ))}
        </div>
      ) : null}
    </section>
  )
}

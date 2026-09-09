/**
 * Inline SVG icon set.
 *
 * Kept as hand-written paths rather than an icon package: there are two dozen
 * of them, they never change, and inlining avoids both a dependency and a
 * network round-trip. All icons inherit `currentColor` and size from CSS.
 */

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const paths = {
  building: (
    <g {...stroke}>
      <path d="M3 21h18" />
      <path d="M5 21V8l7-5 7 5v13" />
      <path d="M9 21v-6h6v6" />
    </g>
  ),
  flask: (
    <g {...stroke}>
      <path d="M10 2v7.5L5.6 17a3 3 0 0 0 2.6 4.5h7.6A3 3 0 0 0 18.4 17L14 9.5V2" />
      <path d="M8.5 2h7" />
      <path d="M7 14h10" />
    </g>
  ),
  users: (
    <g {...stroke}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.5 21a6.5 6.5 0 0 1 13 0" />
      <path d="M16 11.2A3.2 3.2 0 1 0 16 4.8" />
      <path d="M18 21a6.4 6.4 0 0 0-2.2-4.8" />
    </g>
  ),
  shield: (
    <g {...stroke}>
      <path d="M12 2 4 6v6c0 5 3.4 9.3 8 10 4.6-.7 8-5 8-10V6l-8-4Z" />
      <path d="m9 12 2 2 4-4" />
    </g>
  ),
  gear: (
    <g {...stroke}>
      <path d="M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M3 12h3M18 12h3M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      <circle cx="12" cy="12" r="3" />
    </g>
  ),
  hospital: (
    <g {...stroke}>
      <path d="M4 20V10l8-6 8 6v10" />
      <path d="M2 20h20" />
      <path d="M12 9v6M9 12h6" />
    </g>
  ),
  microscope: (
    <g {...stroke}>
      <path d="M6 18h12" />
      <path d="M9 18V9a3 3 0 0 1 6 0v9" />
      <path d="M12 6V3" />
      <path d="M4 21h16" />
    </g>
  ),
  book: (
    <g {...stroke}>
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22V4.5Z" />
      <path d="M4 17h16" />
    </g>
  ),
  check: (
    <g {...stroke}>
      <path d="m9 11 3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </g>
  ),
  clock: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </g>
  ),
  heart: (
    <g {...stroke}>
      <path d="M12 20.5S3.5 15 3.5 9.2A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.5 2.8C20.5 15 12 20.5 12 20.5Z" />
    </g>
  ),
  graduation: (
    <g {...stroke}>
      <path d="M2 8.5 12 4l10 4.5-10 4.5L2 8.5Z" />
      <path d="M6 10.7V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.3" />
      <path d="M22 8.5V15" />
    </g>
  ),
  globe: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
    </g>
  ),
  pin: (
    <g {...stroke} strokeWidth="2">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </g>
  ),
  phone: (
    <g {...stroke} strokeWidth="2">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </g>
  ),
  mail: (
    <g {...stroke} strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </g>
  ),
  arrowUp: (
    <g {...stroke} strokeWidth="2.2">
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </g>
  ),
  facebook: (
    <path
      fill="currentColor"
      d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.6V4.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.4H7.6V14h2.7v8h3.2Z"
    />
  ),
  x: (
    <path
      fill="currentColor"
      d="M17.5 3h3.2l-7 8 7.3 10h-5.4l-4.2-5.9L6.5 21H3.2l7.3-8.4L3.5 3h5.4l4 5.6L17.5 3Z"
    />
  ),
  linkedin: (
    <path
      fill="currentColor"
      d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.8v1.5h.1a4.2 4.2 0 0 1 3.7-2c3 0 3.9 1.9 3.9 4.9v6.6h-4v-5.9c0-1.4-.5-2.4-1.8-2.4-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9v6h-4v-11Z"
    />
  ),
  instagram: (
    <g>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </g>
  ),
  youtube: (
    <path
      fill="currentColor"
      d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8C22 15.2 22 12 22 12s0-3.2-.4-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z"
    />
  ),
}

export default function Icon({ name, className, title }) {
  const path = paths[name]
  if (!path) return null
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {path}
    </svg>
  )
}

import { useEffect } from 'react'

/**
 * Sets the document title and meta description for a route.
 * A tiny stand-in for react-helmet — enough for a site of this size, and one
 * fewer dependency to keep current.
 */
export default function useDocumentMeta(title, description) {
  useEffect(() => {
    if (title) document.title = title
    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}

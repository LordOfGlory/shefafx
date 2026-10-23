import { useEffect } from 'react'

const SITE = 'Shefa Forex Academy'

/** Sets the browser tab title and meta description for the current page. */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : `${SITE} | Forex Trading Education in Kampala, Uganda`
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', description)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title ? `${title} | ${SITE}` : `${SITE} | Learn. Trade. Grow.`)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', description)
  }, [title, description])
}

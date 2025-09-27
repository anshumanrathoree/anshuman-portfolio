"use client"

import { useEffect, useState } from 'react'

interface HydrationWrapperProps {
  children: React.ReactNode
}

export function HydrationWrapper({ children }: HydrationWrapperProps) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)

    // Clean up browser extension attributes that cause hydration issues
    const cleanupExtensionAttributes = () => {
      const attributesToRemove = [
        'bis_skin_checked',
        'data-new-gr-c-s-check-loaded',
        'data-gr-ext-installed',
        'data-lt-installed'
      ]

      attributesToRemove.forEach(attr => {
        document.querySelectorAll(`[${attr}]`).forEach(el => {
          el.removeAttribute(attr)
        })
      })
    }

    // Clean up immediately and on DOM changes
    cleanupExtensionAttributes()

    const observer = new MutationObserver(cleanupExtensionAttributes)
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true
    })

    return () => observer.disconnect()
  }, [])

  // Prevent flash during hydration
  if (!hasMounted) {
    return <div suppressHydrationWarning>{children}</div>
  }

  return <>{children}</>
}
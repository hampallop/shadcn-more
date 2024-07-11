import React, { useEffect, useState } from 'react'

const EndReachedThreshold = 5

export const useScrollable = (ref: React.RefObject<HTMLElement>) => {
  const [isScrollable, setIsScrollable] = useState(false)
  const [isBottomReached, setIsBottomReached] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const checkScrollable = () => {
      const isContentScrollable = element.scrollHeight > element.clientHeight
      setIsScrollable(isContentScrollable)
    }

    const checkBottomReached = () => {
      if (!element) return
      const bottomReached =
        Math.abs(
          element.scrollHeight - element.clientHeight - element.scrollTop,
        ) < EndReachedThreshold
      setIsBottomReached(bottomReached)
    }

    checkScrollable()
    checkBottomReached()

    element.addEventListener('scroll', checkBottomReached)
    window.addEventListener('resize', checkScrollable)

    return () => {
      element.removeEventListener('scroll', checkBottomReached)
      window.removeEventListener('resize', checkScrollable)
    }
  }, [ref])

  return { isScrollable, isBottomReached }
}

import React, { useRef } from 'react'
import { ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useScrollable } from '@/hooks/use-scrollable-indicator'

export const DialogScrollArea: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative">
      <div
        ref={contentRef}
        className={cn('max-h-[calc(100vh-200px)] overflow-y-auto', className)}
      >
        {children}
      </div>
      <ScrollableIndicator containerRef={contentRef} />
    </div>
  )
}

export const ScrollableIndicator: React.FC<{
  containerRef: React.RefObject<HTMLElement>
}> = ({ containerRef }) => {
  const { isScrollable, isBottomReached } = useScrollable(containerRef)

  const isHideIndicator = !isScrollable || isBottomReached

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent transition-opacity duration-300',
        isHideIndicator ? 'opacity-0' : '',
      )}
    >
      <div className="absolute inset-0 mb-1 flex items-end justify-center">
        <ChevronDown className="animate-bounce text-gray-600" size={24} />
      </div>
    </div>
  )
}

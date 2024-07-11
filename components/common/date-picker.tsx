'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { ButtonProps, SelectSingleEventHandler } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

type Props = React.PropsWithChildren<{
  selected?: Date | null
  onSelect: SelectSingleEventHandler
  onClear?: () => void
}> &
  ButtonProps

export function DatePicker({
  selected,
  onSelect,
  onClear,
  className,
  disabled,
  children,
  ...props
}: Props) {
  return (
    /**
     * I believe "modal" prop make sense to set a default to true for DatePicker.
     * So this will help make DatePicker work inside a dialog.
     */
    <Popover modal>
      <PopoverTrigger asChild>
        {children ?? (
          <Button
            variant="outline"
            disabled={disabled}
            className={cn(
              'h-10 w-full justify-between px-3 text-left font-normal hover:bg-transparent',
              !selected && 'text-muted-foreground',
              disabled && 'cursor-not-allowed opacity-50 hover:text-primary',
              className,
            )}
            {...props}
          >
            <div className="flex items-center">
              <CalendarIcon className="mr-2 size-4" />
              {selected ? format(selected, 'PPP') : <span>Pick a date</span>}
            </div>
            {selected && onClear ? (
              <Button
                type="button"
                className="-mr-2 h-8 text-primary/50"
                variant="ghost"
                onClick={(e) => {
                  e.stopPropagation()
                  onClear?.()
                }}
              >
                Clear
              </Button>
            ) : null}
          </Button>
        )}
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selected ?? undefined}
          onSelect={onSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

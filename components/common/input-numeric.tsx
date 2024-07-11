'use client'

import React, { forwardRef, useEffect, useState } from 'react'

import { formatNumber, parseNumberFormatToNumber } from '@/lib/format'
import { Input, InputProps } from '@/components/ui/input'

interface InputNumericProps
  extends Omit<InputProps, 'type' | 'onChange' | 'value'> {
  onChange?: (value: number | null) => void
  value?: number | null
}

export const InputNumeric = forwardRef<HTMLInputElement, InputNumericProps>(
  function InputNumeric({ onChange, value, ...props }, ref) {
    const [displayValue, setDisplayValue] = useState('')

    useEffect(() => {
      setDisplayValue(value != null ? formatNumber(value) : '')
    }, [value])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      const numberValue = parseNumberFormatToNumber(e.target.value)
      setDisplayValue(numberValue != null ? formatNumber(numberValue) : '')
      onChange?.(numberValue)
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
      // Allow: navigation keys, backspace, delete, tab, escape, enter
      // 46: delete, 8: backspace, 9: tab, 27: escape, 13: enter
      // 110: decimal point (numpad), 190: period
      if (
        [46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A / Command+A
        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: home, end, left, right, down, up
        (e.keyCode >= 35 && e.keyCode <= 40)
      ) {
        return // let it happen, don't do anything
      }

      // Ensure that it is a number and stop the keypress
      if (
        (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && // 48-57: top row numbers
        (e.keyCode < 96 || e.keyCode > 105) // 96-105: numpad numbers
      ) {
        e.preventDefault() // stop the keypress if it's not a number
      }
    }

    return (
      <div className="relative">
        <span
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          aria-hidden="true"
        >
          $
        </span>
        <Input
          {...props}
          ref={ref}
          type="text"
          inputMode="numeric"
          className={`pl-7 ${props.className || ''}`}
          value={displayValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    )
  },
)

InputNumeric.displayName = 'InputNumeric'

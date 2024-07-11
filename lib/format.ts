export function removeComma(val: string) {
  return val.replace(/,/g, '')
}

export function formatNumber(val: number) {
  return new Intl.NumberFormat('en-US').format(val)
}

export function parseNumberFormatToNumber(val: string): number | null {
  if (val === '') {
    return null
  }

  const numberValue = Number(removeComma(val))
  return isNaN(numberValue) ? null : numberValue
}

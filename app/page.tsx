'use client'

import React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { DatePicker } from '@/components/common/date-picker'
import { InputNumeric } from '@/components/common/input-numeric'
import { TestDialogDate } from '@/components/test-dialog-date'
import { TestDialogDropdownTable } from '@/components/test-dialog-dropdown-table'
import { TestDialogInsideDropdown } from '@/components/test-dialog-inside-dropdown'
import { TestDialogScrollableIndicatorV2 } from '@/components/test-dialog-scrollalbe-indicator'
import { TestTableDialogDropdownDialog } from '@/components/test-table-dialog-dropdown-dialog'

function TestCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export default function Page() {
  const [date, setDate] = React.useState<Date>()
  return (
    <div className="mx-auto w-full max-w-lg space-y-6 p-10">
      <TestCard title="Test table in dialog, and dropdown button to open another dialog">
        <div className="flex flex-col space-y-2">
          <TestTableDialogDropdownDialog />
        </div>
      </TestCard>
      <TestCard title="Test Dialog Dropdown Table">
        <div className="flex flex-col space-y-2">
          <TestDialogDropdownTable />
        </div>
      </TestCard>
      <TestCard title="Test Dialog inside a dropdown">
        <div className="flex flex-col space-y-2">
          <TestDialogInsideDropdown />
        </div>
      </TestCard>
      <TestCard title="Dialog with Scrollalbe indicator">
        <div className="flex flex-col space-y-2">
          <TestDialogScrollableIndicatorV2 />
        </div>
      </TestCard>
      <TestCard title="InputNumeric">
        <Label htmlFor="dealValue">Value</Label>
        <InputNumeric
          className="text-md focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Enter deal value"
          autoComplete="off"
        />
      </TestCard>
      <TestCard title="DatePicker and Dialog">
        <CardContent>
          <DatePicker
            selected={date}
            onSelect={(selectedDate) => setDate(selectedDate as Date)}
          />
          <TestDialogDate />
        </CardContent>
      </TestCard>
    </div>
  )
}

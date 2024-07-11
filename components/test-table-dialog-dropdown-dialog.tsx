import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { TestDialogDropdownTable } from '@/components/test-dialog-dropdown-table'

export function TestTableDialogDropdownDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Test table in dialog, and dropdown button to open another dialog
          </DialogTitle>
        </DialogHeader>
        <TestDialogDropdownTable />
        <DialogFooter>
          <Button type="submit">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

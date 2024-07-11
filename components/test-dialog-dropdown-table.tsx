import { MoreVertical } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const invoices = [
  {
    invoice: 'INV001',
    totalAmount: '$250.00',
  },
  {
    invoice: 'INV002',
    totalAmount: '$150.00',
  },
  {
    invoice: 'INV003',
    totalAmount: '$350.00',
  },
]

export function TestDialogDropdownTable() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right">Menu</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow
            key={invoice.invoice}
            onClick={(e) => {
              alert('Row has been clicked')
            }}
          >
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            <TableCell className="text-right">
              <Dialog>
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation()
                      }}
                    >
                      <MoreVertical className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DialogTrigger asChild>
                      <DropdownMenuItem
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                      >
                        Open Dialog
                      </DropdownMenuItem>
                    </DialogTrigger>
                    {/* Add more dropdown items as needed */}
                  </DropdownMenuContent>
                </DropdownMenu>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. Are you sure you want to
                      permanently delete this file from our servers?
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button type="submit">Confirm</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

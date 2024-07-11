import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { DialogScrollArea } from '@/components/common/scrollable-indicator'

function LongText() {
  return (
    <div className="mb-20">
      Anyone who has this link will be able to view this. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Sequi asperiores molestias, dicta,
      officiis quo assumenda quibusdam accusamus, natus sapiente dolor libero
      excepturi! Recusandae possimus quia cumque itaque, mollitia dolorem
      quaerat!
    </div>
  )
}

export function TestDialogScrollableIndicatorV2() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open long dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>Test scrollable indicator</DialogDescription>
          </DialogHeader>
          <DialogScrollArea>
            <LongText />
            <LongText />
            <LongText />
            <LongText />
            <LongText />
            <LongText />
          </DialogScrollArea>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open short dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>Test scrollable indicator</DialogDescription>
          </DialogHeader>
          <DialogScrollArea>
            <LongText />
          </DialogScrollArea>
        </DialogContent>
      </Dialog>
    </>
  )
}

import Link from 'next/link'
import { PanelLeft, PawPrint } from 'lucide-react'
import { ItemSidebarMobile } from './item-sidebar-mobile'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'

export function SidebarMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
          >
            <PawPrint className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">e-Vista</span>
          </Link>
          <ItemSidebarMobile />
        </nav>
      </SheetContent>
    </Sheet>
  )
}

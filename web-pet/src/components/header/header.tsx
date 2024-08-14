import { SidebarMobile } from '../sidebar-mobile'
import { Avatar } from '../avatar'
import { Breadcrumb } from './breadcrumb'
import { ModeToggle } from '../theme-provider/mode-toggle'

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <SidebarMobile />
      <div className="flex w-full items-center justify-between">
        <Breadcrumb />
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Avatar />
        </div>
      </div>
    </header>
  )
}

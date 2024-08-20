import { icons } from 'lucide-react'

type ItemsSidebar = {
  name: string
  href: string
  icon: keyof typeof icons
}

export const itemsSidebars: ItemsSidebar[] = [
  {
    name: 'Inicio',
    href: '/inicio',
    icon: 'House',
  },
  {
    name: 'Campanhas',
    href: '/campanhas',
    icon: 'CalendarDays',
  },
]

'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Breadcrumb as BreadcrumbShadcn,
} from '../ui/breadcrumb'

export function Breadcrumb() {
  const currentPathname = usePathname()
  const pathnames = currentPathname.split('/').filter(Boolean)

  return (
    <BreadcrumbShadcn className="hidden md:flex">
      <BreadcrumbList>
        {pathnames.map((breadcrumb, index) => {
          const href = `/${pathnames.slice(0, index + 1).join('/')}`
          const isLast = index === pathnames.length - 1

          return isLast ? (
            <BreadcrumbItem key={breadcrumb}>
              <BreadcrumbPage>{breadcrumb}</BreadcrumbPage>
            </BreadcrumbItem>
          ) : (
            <div key={breadcrumb} className="flex items-center gap-2">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={href}>{breadcrumb}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </div>
          )
        })}
      </BreadcrumbList>
    </BreadcrumbShadcn>
  )
}

import { Link, useLocation } from '@tanstack/react-router'
import { AlignJustify } from 'lucide-react'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/shadcn/sheet'
import { NAV_ITEMS } from '@/constants'
import { cn } from '@/lib/utils'
import { Logo } from './logo'

export function Drawer() {
  const { pathname } = useLocation()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="size-5 cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left" className="px-5 py-5">
        <div className="flex flex-col gap-10">
          <Logo />
          <div className="flex flex-col gap-4">
            {NAV_ITEMS?.map(({ label, to }, idx) => (
              <SheetClose asChild>
                <Link
                  key={idx + label}
                  to={to}
                  className={cn(
                    'text-md',
                    pathname === to && 'text-app-primary',
                  )}
                >
                  {label}
                </Link>
              </SheetClose>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

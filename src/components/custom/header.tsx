import { Link, useLocation } from '@tanstack/react-router'

import { Drawer } from './drawer'
import { Logo } from './logo'
import { ThemeToggler } from './theme-toggler'
import { NAV_ITEMS } from '@/constants'
import { useIsMobile } from '@/hooks/useIsMobile'
import { cn } from '@/lib/utils'

export const Header = () => {
  const { pathname } = useLocation()
  const isMobile = useIsMobile()

  return (
    <div className="fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-background">
      <div className="flex items-center justify-between py-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          {isMobile && <Drawer />}
          <Logo />
          {!isMobile && (
            <div className="flex gap-10 ms-20">
              {NAV_ITEMS?.map(({ label, to }, idx) => (
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
              ))}
            </div>
          )}
        </div>
        <ThemeToggler />
      </div>
    </div>
  )
}

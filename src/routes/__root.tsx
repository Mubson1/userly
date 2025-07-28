import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import type { QueryClient } from '@tanstack/react-query'

import TanStackQueryLayout from '../integrations/tanstack-query/layout.tsx'
import { Header } from '@/components/custom/header.tsx'
import { ThemeProvider } from '@/context/theme-context.tsx'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <div className="max-w-7xl pt-16 mx-auto px-4 sm:px-6 lg:px-8">
      <ThemeProvider>
        <Header />
        <div className="pt-4 lg:pt-6">
          <Outlet />
        </div>
        <TanStackRouterDevtools />
        <TanStackQueryLayout />
      </ThemeProvider>
    </div>
  ),
})

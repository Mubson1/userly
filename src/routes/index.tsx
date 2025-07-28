import { createFileRoute, Link } from '@tanstack/react-router'

import { Button } from '@/components/shadcn/button'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="mt-40">
      <h1 className="text-5xl text-center">
        Explore Users with a Touch of Magic{' '}
      </h1>
      <h1 className="text-5xl text-center text-app-primary mt-1 sm:mt-2 lg:mt-3">
        — Beautiful, Fast, and Effortless
      </h1>
      <div className="text-md text-center mt-8">
        A sleek and no-fuss user directory powered by mock data that is smooth,
        instant, and made to impress.
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/users">
          <Button
            className="bg-app-primary hover:bg-app-primary/80 cursor-pointer text-white"
            size="xl"
          >
            Start Browsing Now
          </Button>
        </Link>
      </div>
    </div>
  )
}

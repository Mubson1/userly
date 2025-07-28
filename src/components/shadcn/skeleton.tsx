import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        'animate-pulse rounded-md bg-[linear-gradient(270deg,#f7f7f7_0%,#e6e6e6_100%)]',
        'dark:bg-[linear-gradient(270deg,#2e2e2e_0%,#3a3a3a_100%)]',
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }

import { Grid2x2, Square } from 'lucide-react'

import { cn } from '@/lib/utils'

export type ListViewTypes = 'card' | 'list'

interface ListTogglerPropTypes {
  onToggle: (view: ListViewTypes) => void
  activeView: ListViewTypes
  className?: string
}
export const ListToggler = ({
  onToggle,
  activeView,
  className,
}: ListTogglerPropTypes) => {
  const viewOptions: ListViewTypes[] = ['card', 'list']

  return (
    <div
      className={cn(
        'flex border rounded-2xl p-1 gap-2 w-fit sm:ml-auto mt-4 sm:mt-0',
        className,
      )}
    >
      {viewOptions.map((view, idx) => (
        <div
          key={idx}
          className={cn(
            'flex gap-2 items-center px-8 py-2 rounded-xl cursor-pointer capitalize',
            activeView === view && 'bg-app-primary',
          )}
          onClick={() => onToggle(view)}
        >
          {view === 'card' ? (
            <Square className="size-4" />
          ) : (
            <Grid2x2 className="size-4" />
          )}
          {view}
        </div>
      ))}
    </div>
  )
}

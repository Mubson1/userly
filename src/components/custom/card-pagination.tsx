import type { OnChangeFn, PaginationState } from '@tanstack/react-table'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from '@/components/shadcn/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn/select'
import { PAGE_SIZES } from '@/constants'

interface CardPaginationProps {
  pageCount: number
  pagination: PaginationState
  onPaginationChange: OnChangeFn<PaginationState>
}

export function CardPagination({
  pageCount,
  pagination,
  onPaginationChange,
}: CardPaginationProps) {
  const currentPage = pagination.pageIndex + 1
  const canPrevious = pagination.pageIndex > 0
  const canNext = pagination.pageIndex < pageCount - 1

  return (
    <div className="flex items-center space-x-6 lg:space-x-8 justify-end py-4">
      <div className="flex items-center space-x-2">
        <p className="text-sm font-medium">Items per page</p>
        <Select
          value={`${pagination.pageSize}`}
          onValueChange={(value) =>
            onPaginationChange({ pageIndex: 0, pageSize: Number(value) })
          }
        >
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue placeholder={pagination.pageSize} />
          </SelectTrigger>
          <SelectContent side="top">
            {PAGE_SIZES.map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex w-[80px] items-center justify-center text-sm font-medium">
        Page {currentPage}
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="hidden size-8 lg:flex"
          onClick={() => onPaginationChange({ ...pagination, pageIndex: 0 })}
          disabled={!canPrevious}
        >
          <span className="sr-only">Go to first page</span>
          <ChevronsLeft />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="size-8"
          onClick={() =>
            onPaginationChange({
              ...pagination,
              pageIndex: pagination.pageIndex - 1,
            })
          }
          disabled={!canPrevious}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeft />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="size-8"
          onClick={() =>
            onPaginationChange({
              ...pagination,
              pageIndex: pagination.pageIndex + 1,
            })
          }
          disabled={!canNext}
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRight />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="hidden size-8 lg:flex"
          onClick={() =>
            onPaginationChange({ ...pagination, pageIndex: pageCount - 1 })
          }
          disabled={!canNext}
        >
          <span className="sr-only">Go to last page</span>
          <ChevronsRight />
        </Button>
      </div>
    </div>
  )
}

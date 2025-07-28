import { useEffect, useState } from 'react'

import { createFileRoute, useNavigate } from '@tanstack/react-router'
import type { PaginationState } from '@tanstack/react-table'

import { CardView } from './-components/card-view'
import { UserTable } from './-components/table-view'
import { Input } from '@/components/shadcn/input'
import {
  ListToggler,
  type ListViewTypes,
} from '@/components/custom/list-toggler'
import { USER_LIST_VIEW_KEY } from '@/constants'
import { useDebounce } from '@/hooks/useDebounce'
import storage from '@/lib/utils'
import { useGetUsersList } from '@/stores/users'
import type { UserDetailType } from '@/stores/users/types'

export const Route = createFileRoute('/(platform)/users/')({
  component: RouteComponent,
})

function RouteComponent() {
  const naviate = useNavigate()

  const [isCardView, setIsCardView] = useState<boolean>(true)
  const [search, setSearch] = useState('')
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const debouncedSearchTerm = useDebounce(search, 500)

  const { data: userList, isLoading: userListLoading } = useGetUsersList({
    limit: pagination.pageSize,
    skip: pagination.pageIndex * pagination.pageSize,
    q: debouncedSearchTerm,
  })

  useEffect(() => {
    const savedView = storage.getToken(USER_LIST_VIEW_KEY)
    setIsCardView(savedView === 'card')
  }, [])

  const handleViewToggle = (view: ListViewTypes) => {
    setIsCardView(view === 'card')
    storage.setToken(USER_LIST_VIEW_KEY, view)
  }

  const handleUserClick = ({ id }: UserDetailType) => {
    naviate({ to: `/users/${id}` })
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-between items-center">
        <Input
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="col-span-1"
        />
        <ListToggler
          activeView={isCardView ? 'card' : 'list'}
          onToggle={handleViewToggle}
          className="grid-cols-1"
        />
      </div>
      {isCardView ? (
        <CardView
          data={userList}
          loading={userListLoading}
          pagination={pagination}
          setPagination={setPagination}
          onClick={handleUserClick}
        />
      ) : (
        <UserTable
          data={userList}
          loading={userListLoading}
          pagination={pagination}
          setPagination={setPagination}
          onClick={handleUserClick}
        />
      )}
    </div>
  )
}

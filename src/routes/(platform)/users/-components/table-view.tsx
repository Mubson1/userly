import type { ColumnDef } from '@tanstack/react-table'

import type { UserListViewPropTypes } from './types'
import { MyTable } from '@/components/custom/my-table'
import type { UserDetailType } from '@/stores/users/types'

export const UserTable = ({
  loading,
  onClick,
  pagination,
  setPagination,
  data,
}: UserListViewPropTypes) => {
  const columns: ColumnDef<UserDetailType>[] = [
    { accessorKey: 'id', header: 'ID' },
    {
      id: 'userInfo',
      header: 'User',
      cell: ({ row }) => {
        const user = row.original
        return (
          <div className="flex gap-4">
            <div className="size-6 sm:size-7 lg:size-10">
              <img
                src={user.image}
                alt={user.firstName + '-profile-picutre'}
                className="size-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col text-md">
              <div className="font-semibold">
                {user.firstName + ' ' + user.lastName}
              </div>
              <div className="opacity-80">{user.email}</div>
            </div>
          </div>
        )
      },
    },
    { accessorKey: 'phone', header: 'Contact Number' },
    { accessorKey: 'gender', header: 'Gender' },
    {
      id: 'dob',
      cell: ({ row }) => {
        const user = row.original
        const formattedDate = new Date(user.birthDate).toLocaleDateString(
          'en-US',
          { day: '2-digit', month: 'short', year: 'numeric' },
        )
        return <span>{formattedDate}</span>
      },
      header: 'Date of Birth',
    },
    { accessorKey: 'bloodGroup', header: 'Blood Group' },
  ]

  return (
    <div>
      <MyTable
        columns={columns}
        data={data?.users || []}
        loading={loading}
        pageCount={Math.ceil((data?.total ?? 0) / pagination.pageSize)}
        pagination={pagination}
        onPaginationChange={setPagination}
        onRowClick={onClick}
      />
    </div>
  )
}

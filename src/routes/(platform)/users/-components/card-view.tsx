import { Baby, Phone } from 'lucide-react'

import type { UserListViewPropTypes } from './types'
import { CardPagination } from '@/components/custom/card-pagination'
import { Button } from '@/components/shadcn/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/shadcn/card'
import { Skeleton } from '@/components/shadcn/skeleton'
import type { UserDetailType } from '@/stores/users/types'

export const CardContents = ({ user }: { user: UserDetailType }) => (
  <>
    <CardHeader>
      <span className="text-sm font-bold">@{user.username}</span>
    </CardHeader>
    <CardContent className="flex flex-col gap-6">
      <div className="flex justify-between">
        <div>
          <h2 className="line-clamp-2 text-lg">
            {user.firstName + ' ' + user.lastName}
          </h2>
          <span className="opacity-80 text-xs">{user.email}</span>
        </div>
        <img
          src={user.image}
          alt={user.username}
          className="rounded-full size-12 object-cover"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 items-center text-sm">
          <Phone className="size-4" /> {user.phone}
        </div>
        <div className="flex gap-3 items-center text-sm">
          <Baby className="size-4" />
          <span>
            {new Date(user.birthDate).toLocaleDateString('en-US', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </span>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="px-4 py-1 capitalize rounded-full border">
          {user.gender}
        </div>
        <div className="px-4 py-1 capitalize rounded-full border">
          {user.bloodGroup}
        </div>
      </div>
    </CardContent>
  </>
)

export const CardView = ({
  loading,
  onClick,
  pagination,
  setPagination,
  data,
}: UserListViewPropTypes) => {
  return (
    <div className="my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          [...new Array(pagination.pageSize)].map((_, idx) => (
            <Skeleton
              key={idx + 'card-loader'}
              className="col-span-1 h-[320px]"
            />
          ))
        ) : data?.users?.length ? (
          data.users.map((user, idx) => (
            <Card key={idx + 'card-detail'} className="bg-app-primary/10">
              <CardContents user={user} />
              <CardFooter>
                <Button
                  className="w-full rounded-lg bg-app-primary"
                  onClick={() => onClick(user)}
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="my-4">No user found</div>
        )}
      </div>
      <CardPagination
        onPaginationChange={setPagination}
        pageCount={Math.ceil((data?.total || 0) / pagination.pageSize)}
        pagination={pagination}
      />
    </div>
  )
}

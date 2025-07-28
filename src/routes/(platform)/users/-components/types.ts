import type { GetUsrListResType, UserDetailType } from '@/stores/users/types'
import type { PaginationState } from '@tanstack/react-table'

export interface UserListViewPropTypes {
  pagination: PaginationState
  setPagination: React.Dispatch<React.SetStateAction<PaginationState>>
  data?: GetUsrListResType
  loading: boolean
  onClick: (row: UserDetailType) => void
}

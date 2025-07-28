import { useQuery, type QueryFunctionContext } from '@tanstack/react-query'

import type { PaginatedQuery } from '../types'
import type { GetUsrListResType, UserDetailType } from './types'
import { axios } from '@/lib/axios'

const getUsersList = async ({
  queryKey,
}: QueryFunctionContext): Promise<GetUsrListResType> => {
  const [, params] = queryKey
  return axios.get('/users/search', { params })
}

export const useGetUsersList = (params: PaginatedQuery & { q: string }) =>
  useQuery({
    queryKey: ['user-list', params],
    queryFn: getUsersList,
  })

const getUserById = async ({
  queryKey,
}: QueryFunctionContext): Promise<UserDetailType> => {
  const [, userId] = queryKey
  return axios.get(`/users/${userId}`)
}

export const useGetUserById = (userId: string) =>
  useQuery({
    queryKey: ['user-detail', userId],
    queryFn: getUserById,
  })

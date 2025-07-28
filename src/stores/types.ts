export interface PaginationMeta {
  total: number
  skip: number
  limit: number
}

export type PaginatedResponse<T, K extends string> = PaginationMeta & {
  [key in K]: T[]
}

export interface PaginatedQuery {
  limit: number
  skip: number
}

export interface AddressDetailType {
  address: string
  city: string
  state: string
  stateCode: string
  postalCode: string
  coordinates: {
    lat: number
    lng: number
  }
  country: string
}

export interface CompanyDetailType {
  department: string
  name: string
  title: string
  address: AddressDetailType
}

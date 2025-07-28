import type {
  AddressDetailType,
  CompanyDetailType,
  PaginatedResponse,
} from '../types'

export interface UserDetailType {
  id: number
  firstName: string
  lastName: string
  maidenName?: string
  age: number
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: Date
  image: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: {
    color: string
    type: string
  }
  ip: string
  address: AddressDetailType
  macAddress: string
  university: string
  bank: {
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: string
    iban: string
  }
  company: CompanyDetailType
  ein: string
  ssn: string
  userAgent: string
  crypto: {
    coin: string
    wallet: string
    network: string
  }
  role: string
}

export type GetUsrListResType = PaginatedResponse<UserDetailType, 'users'>

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const storage = {
  getToken: (tokenKey: string) =>
    JSON.parse(window.localStorage.getItem(tokenKey) as string),
  setToken: (tokenKey: string, token: string) => {
    window.localStorage.setItem(tokenKey, JSON.stringify(token))
  },
}

export default storage

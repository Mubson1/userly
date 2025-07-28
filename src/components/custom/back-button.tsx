import { useRouter } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react'

import { Button } from '@/components/shadcn/button'

export const BackButton = () => {
  const router = useRouter()

  const handleGoBack = () => {
    router.history.back()
  }

  return (
    <Button
      className="rounded-full text-lg text-primary w-fit"
      variant="outline"
      onClick={handleGoBack}
    >
      <ChevronLeft className="size-4" />
      Back
    </Button>
  )
}

import { createFileRoute } from '@tanstack/react-router'

import { CardContents } from './-components/card-view'
import { BackButton } from '@/components/custom/back-button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shadcn/accordion'
import { Card, CardContent } from '@/components/shadcn/card'
import { useGetUserById } from '@/stores/users'

export const Route = createFileRoute('/(platform)/users/$userId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { userId } = Route.useParams()

  const { data: userDetail, isLoading } = useGetUserById(userId)

  if (isLoading || !userDetail) return null

  return (
    <div className="flex flex-col gap-5">
      <BackButton />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-10">
        <Card className="col-span-1">
          <CardContents user={userDetail} />
          <hr />
          <CardContent>
            <div className="text-lg font-semibold">About Me</div>
            <span className="text-sm">
              I am a {userDetail.age}-year-old {userDetail.gender} with a height
              of {userDetail.height} cm and a weight of {userDetail.weight} kg.
              My eye color is{' '}
              <span className="lowercase">{userDetail.eyeColor}</span>. I have{' '}
              <span className="lowercase">{userDetail.hair.color}</span> hair
              with <span className="lowercase">{userDetail.hair.type}</span>{' '}
              texture. My blood group is {userDetail.bloodGroup}.
            </span>
          </CardContent>
        </Card>
        <div className="col-span-2">
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col gap-4"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>My Address</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <span className="break-normal">
                  I live at {userDetail.address.address},{' '}
                  {userDetail.address.city}, {userDetail.address.state}(
                  {userDetail.address.state}), {userDetail.address.postalCode},{' '}
                  {userDetail.address.country}, with coordinates latitude{' '}
                  {userDetail.address.coordinates.lat} and longitude{' '}
                  {userDetail.address.coordinates.lng}.
                </span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Company Details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <span>
                  I work at {userDetail.company.name} in the{' '}
                  {userDetail.company.department} department as a{' '}
                  {userDetail.company.title}. My office is located at{' '}
                  {userDetail.company.address.address},
                  {userDetail.company.address.city},{' '}
                  {userDetail.company.address.state}(
                  {userDetail.company.address.stateCode}),{' '}
                  {userDetail.company.address.postalCode},
                  {userDetail.company.address.country},
                </span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Bank Details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <span>
                  My bank card is a {userDetail.bank.cardType} card with the
                  number {userDetail.bank.cardNumber}, expiring on{' '}
                  {userDetail.bank.cardExpire}. The currency used is{' '}
                  {userDetail.bank.currency}, and my IBAN is{' '}
                  {userDetail.bank.iban}.
                </span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Others</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                My role is {userDetail.role}. I use {userDetail.crypto.coin} as
                my crypto coin. My wallet address is
                {userDetail.crypto.wallet}, and it's on the
                {userDetail.crypto.network} network.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

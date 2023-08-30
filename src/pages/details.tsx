"use client";

import { Notifications } from "@/components/dashboard/notifications";
import { BasicInfo } from "@/components/details/basic-info";
import { SecurityAndPrivacy } from "@/components/details/security-and-privacy";
import { IAM } from "@/components/details/iam";
import { Compliance } from "@/components/details/compliance";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BaseLayout from "@/components/baselayout/baselayout";
import { DetailsMainNav } from "@/components/details/details-main-nav";

export default function DetailsPage() {
  return (
    <BaseLayout>
      <section className="container">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <div>
              <DetailsMainNav/>
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <Notifications />
            </div>
          </div>
        </div>
        <div className="p-8">
          <h1 className="font-bold">Office 365</h1>
          <p>Application Type - Office</p>
        </div>
        <div className="p-8">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <Card>
              <AccordionItem value="item-1" className="mr-5">
                <AccordionTrigger className="ml-5">Basic Info</AccordionTrigger>
                <AccordionContent>
                  <CardDescription className="ml-5">
                    Office when and where you need it. Work anywhere, anytime,
                    on any device. Office 365 is ready when you are.
                  </CardDescription>
                  <BasicInfo />
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card className="mt-5">
              <AccordionItem value="item-2" className="mr-5">
                <AccordionTrigger className="ml-5">
                  Security & Privacy
                </AccordionTrigger>
                <AccordionContent>
                  <CardDescription className="ml-5">
                    Office when and where you need it. Work anywhere, anytime,
                    on any device. Office 365 is ready when you are.
                  </CardDescription>
                  <SecurityAndPrivacy />
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card className="mt-5">
              <AccordionItem value="item-3" className="mr-5">
                <AccordionTrigger className="ml-5">
                  Identity Access Management
                </AccordionTrigger>
                <AccordionContent>
                  <CardDescription className="ml-5">
                    Office when and where you need it. Work anywhere, anytime,
                    on any device. Office 365 is ready when you are.
                  </CardDescription>
                  <IAM />
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card className="mt-5">
              <AccordionItem value="item-4" className="mr-5">
                <AccordionTrigger className="ml-5">Compliance</AccordionTrigger>
                <AccordionContent>
                  <CardDescription className="ml-5">
                    Office when and where you need it. Work anywhere, anytime,
                    on any device. Office 365 is ready when you are.
                  </CardDescription>
                  <Compliance />
                </AccordionContent>
              </AccordionItem>
            </Card>
          </Accordion>
        </div>
      </section>
    </BaseLayout>
  );
}

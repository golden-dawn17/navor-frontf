import { Button } from "../ui/button";
import { List } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

export function DataTableAttributes() {
  return (
    <div>
      <Button
        variant="outline"
        size="sm"
        className="ml-auto hidden h-8 lg:flex"
        style={{ background: "#333333", color: "white", marginRight: "1rem" }}
      >
        <Sheet>
          <SheetTrigger asChild>
            <div className="flex" style={{ alignItems: "center" }}>
              <List
                style={{ height: "1rem", width: "1rem", marginRight: "0.5rem" }}
              />
              <p style={{ fontSize: "12px" }}>Attributes</p>
            </div>
          </SheetTrigger>

          <SheetContent
            className="w-[400px] sm:w-[400px]"
            style={{ height: "100%" }}
          >
            <SheetHeader>
              <SheetTitle>Edit attributes</SheetTitle>
              <SheetDescription>
                Make changes to your attributes here. <br />
                Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <ScrollArea className="h-[75vh] w-[100%]">
              <div className="p-8">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue="item-1"
                >
                  <Card className="mt-5">
                    <AccordionItem value="item-1" className="mr-5">
                      <AccordionTrigger className="ml-5">
                        Security & Privacy
                      </AccordionTrigger>
                      <AccordionContent>
                        <div>
                          <CardContent>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium peer-disabled:cursor-not-allowed"
                              >
                                Product URL
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Open Source
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Employee Count
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Vendor Name
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Catagory
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                L2 Subcatagory
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                L3 Subcatagory
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                NPS Score
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                How is this app deducted?
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Headquarters Location
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Founded
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                App Domains
                              </label>
                            </div>
                          </CardContent>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Card>
                  <Card className="mt-5">
                    <AccordionItem value="item-2" className="mr-5">
                      <AccordionTrigger className="ml-5">
                        Identity Access Management
                      </AccordionTrigger>
                      <AccordionContent>
                        <div>
                          <CardContent>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium peer-disabled:cursor-not-allowed"
                              >
                                Product URL
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Open Source
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Employee Count
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Vendor Name
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Catagory
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                L2 Subcatagory
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                L3 Subcatagory
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                NPS Score
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                How is this app deducted?
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Headquarters Location
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Founded
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                App Domains
                              </label>
                            </div>
                          </CardContent>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Card>
                  <Card className="mt-5">
                    <AccordionItem value="item-3" className="mr-5">
                      <AccordionTrigger className="ml-5">
                        Compliance
                      </AccordionTrigger>
                      <AccordionContent>
                        {" "}
                        <div>
                          <CardContent>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium peer-disabled:cursor-not-allowed"
                              >
                                Product URL
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Open Source
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Employee Count
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Vendor Name
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Catagory
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                L2 Subcatagory
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                L3 Subcatagory
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                NPS Score
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                How is this app deducted?
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Headquarters Location
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Founded
                              </label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              <Checkbox id="product_url" />
                              <label
                                htmlFor="product_url"
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                App Domains
                              </label>
                            </div>
                          </CardContent>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Card>
                </Accordion>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button
                    type="submit"
                    style={{ justifyContent: "center", width: "100%" }}
                  >
                    Save changes
                  </Button>
                </SheetClose>
              </SheetFooter>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </Button>
    </div>
  );
}

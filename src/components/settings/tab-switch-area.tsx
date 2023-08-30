import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Attributes } from "./attributes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function TabSwitchArea() {
  return (
    <div>
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="bing">Bing</TabsTrigger>
          <TabsTrigger value="attributes">Attributes</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="pt-8">
          <CardContent>Profile</CardContent>
        </TabsContent>
        <TabsContent value="bing" className="pt-8">
          <CardContent>Bing</CardContent>
        </TabsContent>
        <TabsContent value="attributes" className="pt-8">
          <Attributes />
        </TabsContent>
      </Tabs>
    </div>
  );
}

"use client";
import { z } from "zod";

import { columns } from "@/components/applications/columns";
import { DataTable } from "@/components/applications/data-table";
import { taskSchema } from "@/components/applications/data/schema";
import { Search } from "@/components/dashboard/search";
import { Notifications } from "@/components/dashboard/notifications";
import BaseLayout from "@/components/baselayout/baselayout";
import { SettingsMainNav } from "@/components/settings/settings-main-nav";
import { TabSwitchArea } from "@/components/settings/tab-switch-area";

export default function SettingsPage() {
  return (
    <BaseLayout>
      <section className="container" style={{paddingBottom:"5rem", paddingLeft:"6rem"}}>
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <div>
              <SettingsMainNav />
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <Notifications />
            </div>
          </div>
        </div>
        <div style={{ paddingTop: "2rem", paddingLeft: "1.2rem" }}>
          <div>
            <p style={{ fontWeight: "500" }}>
              Manage your Account Settings & Attributes
            </p>
            <p style={{ fontSize: "0.8rem", color: "gray" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              deleniti recusandae pariatur earum, consequatur doloribus
              voluptatibus.
            </p>
          </div>
          <div style={{ paddingTop: "2rem" }}>
            <TabSwitchArea />
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

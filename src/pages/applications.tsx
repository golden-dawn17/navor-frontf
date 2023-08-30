"use client";
import { z } from "zod";

import { columns } from "@/components/applications/columns";
import { DataTable } from "@/components/applications/data-table";
import { taskSchema } from "@/components/applications/data/schema";
import { Search } from "@/components/dashboard/search";
import { Notifications } from "@/components/dashboard/notifications";
import BaseLayout from "@/components/baselayout/baselayout";
import { ApplicationsMainNav } from "@/components/applications/applications-main-nav";

// Simulate a database read for tasks.
function getApplications() {
  const data = require("@/components/applications/data/applications.json");
  return z.array(taskSchema).parse(data);
}

export default function ApplicationsPage() {
  const applications = getApplications();

  return (
    <BaseLayout>
      <section className="container" style={{paddingLeft:"6rem"}}>
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <div>
              <ApplicationsMainNav />
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <Notifications />
            </div>
          </div>
        </div>
        <div className="p-8">
          <DataTable data={applications} columns={columns} />
        </div>
      </section>
    </BaseLayout>
  );
}

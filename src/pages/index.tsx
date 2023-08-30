"use client";

import { ChartArea } from "@/components/dashboard/chart-area";
import { HighlyUnknownApps } from "@/components/dashboard/highly-unknown-applications";
import { Notifications } from "@/components/dashboard/notifications";
import { RecentlyUpdatedApps } from "@/components/dashboard/recently-updated-applications";
import { RiskScores } from "@/components/dashboard/risk-scores";
import { Search } from "@/components/dashboard/search";
import { TotalApplications } from "@/components/dashboard/total-applications";

import BaseLayout from "@/components/baselayout/baselayout";
import { DashboardMainNav } from "@/components/dashboard/dashboard-main-nav";

export default function Dashboard() {
  return (
    <BaseLayout>
      <div className="container" style={{paddingBottom:"5rem", paddingLeft:"6rem"}}>
        <div className="flex h-16 items-center px-4">
          <div>
            <DashboardMainNav />
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Notifications />
          </div>
        </div>
        <div className="dashboardLayout p-3 pt-8">
          <div className="box1">
            <TotalApplications />
          </div>
          <div className="box2">
            <RiskScores />
          </div>
          <div className="box3">
            <HighlyUnknownApps />
          </div>
          <div className="box4">
            <ChartArea />
          </div>
          <div className="box5">
            <RecentlyUpdatedApps />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

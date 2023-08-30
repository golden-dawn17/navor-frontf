import React, { ReactNode } from "react";
import SideBar from "../sidebar/sidebar";

interface Props {
  children: ReactNode | ReactNode[];
}
export default function BaseLayout({ children }: Props) {
  return (
    <div className="layout">
      <SideBar />
      {children}
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { LayoutDashboardIcon } from "lucide-react";

import logo from "./logo.png";
import "./sidebar.css";
import { useState } from "react";
import { UserNav } from "./user-nav";

export default function SideBar() {
  const [isCollapsedSidebar, setIstoggleCollapsedSidebar] =
    useState<boolean>(true);

  const toggleSidebarCollapseHandlerTrue = () => {
    setIstoggleCollapsedSidebar(true);
  };
  const toggleSidebarCollapseHandlerFalse = () => {
    setIstoggleCollapsedSidebar(false);
  };
  return (
    <div
      className="sidebar__wrapper"
      onMouseEnter={toggleSidebarCollapseHandlerFalse}
      onMouseLeave={toggleSidebarCollapseHandlerTrue}
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <aside className="sidebar" data-collapse={isCollapsedSidebar}>
        <div className="sidebar__top">
          <Image
            src={logo}
            width={80}
            height={80}
            className="sidebar__logo"
            alt="logo"
          />
          <p className="sidebar__logo-name">Navor</p>
        </div>
        <div className="">
          <ul className="sidebar__list">
            <li className="sidebar__item">
              <Link href="/" className="sidebar__link">
                <span className="sidebar__icon">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.24512 13.7818L8.23825 9.89161L11.6524 12.5735L14.5815 8.79321"
                      stroke="#8F95B2"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <circle
                      cx="17.9954"
                      cy="3.20052"
                      r="1.9222"
                      stroke="#8F95B2"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.9248 2.12042H5.65704C2.6456 2.12042 0.77832 4.25315 0.77832 7.26459V15.347C0.77832 18.3584 2.60898 20.482 5.65704 20.482H14.2612C17.2726 20.482 19.1399 18.3584 19.1399 15.347V8.30807"
                      stroke="#8F95B2"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="sidebar__name">Dashboard</span>
              </Link>
            </li>
            <li className="sidebar__item">
              <Link href="/applications" className="sidebar__link">
                <span className="sidebar__icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.3717 10.2017V17.0618"
                      stroke="#8F95B2"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0377 6.91895V17.0617"
                      stroke="#8F95B2"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.6285 13.8268V17.0619"
                      stroke="#8F95B2"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z"
                      stroke="#8F95B2"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="sidebar__name">Applications</span>
              </Link>
            </li>
            <li className="sidebar__item">
              <Link href="/settings" className="sidebar__link">
                <span className="sidebar__icon">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_59_24383)">
                      <path
                        d="M13.8204 22.5H10.1804C9.95231 22.5 9.73108 22.4221 9.55337 22.2792C9.37567 22.1362 9.25218 21.9368 9.20337 21.714L8.79637 19.83C8.25343 19.5921 7.73861 19.2946 7.26137 18.943L5.42437 19.528C5.20694 19.5973 4.97232 19.5902 4.75949 19.5078C4.54666 19.4254 4.36842 19.2727 4.25437 19.075L2.43037 15.924C2.31752 15.7261 2.27516 15.4958 2.31021 15.2708C2.34527 15.0457 2.45568 14.8392 2.62337 14.685L4.04837 13.385C3.98357 12.7961 3.98357 12.2019 4.04837 11.613L2.62337 10.316C2.45544 10.1618 2.34489 9.95507 2.30982 9.72978C2.27476 9.50449 2.31726 9.27397 2.43037 9.076L4.25037 5.923C4.36442 5.72532 4.54266 5.57259 4.75549 5.49019C4.96832 5.40778 5.20294 5.40066 5.42037 5.47L7.25737 6.055C7.50137 5.875 7.75537 5.707 8.01737 5.555C8.27037 5.413 8.53037 5.284 8.79637 5.169L9.20437 3.287C9.25295 3.0642 9.37621 2.86469 9.55372 2.72155C9.73123 2.57841 9.95234 2.50024 10.1804 2.5H13.8204C14.0484 2.50024 14.2695 2.57841 14.447 2.72155C14.6245 2.86469 14.7478 3.0642 14.7964 3.287L15.2084 5.17C15.4884 5.294 15.7624 5.433 16.0274 5.588C16.2744 5.731 16.5134 5.888 16.7434 6.057L18.5814 5.472C18.7987 5.40292 19.0331 5.41017 19.2457 5.49256C19.4583 5.57495 19.6364 5.72753 19.7504 5.925L21.5704 9.078C21.8024 9.485 21.7224 10 21.3774 10.317L19.9524 11.617C20.0172 12.2059 20.0172 12.8001 19.9524 13.389L21.3774 14.689C21.7224 15.007 21.8024 15.521 21.5704 15.928L19.7504 19.081C19.6363 19.2787 19.4581 19.4314 19.2453 19.5138C19.0324 19.5962 18.7978 19.6033 18.5804 19.534L16.7434 18.949C16.2665 19.3003 15.752 19.5975 15.2094 19.835L14.7964 21.714C14.7476 21.9366 14.6243 22.1359 14.4468 22.2788C14.2693 22.4218 14.0483 22.4998 13.8204 22.5V22.5ZM11.9964 8.5C10.9355 8.5 9.91809 8.92143 9.16795 9.67157C8.4178 10.4217 7.99637 11.4391 7.99637 12.5C7.99637 13.5609 8.4178 14.5783 9.16795 15.3284C9.91809 16.0786 10.9355 16.5 11.9964 16.5C13.0572 16.5 14.0747 16.0786 14.8248 15.3284C15.5749 14.5783 15.9964 13.5609 15.9964 12.5C15.9964 11.4391 15.5749 10.4217 14.8248 9.67157C14.0747 8.92143 13.0572 8.5 11.9964 8.5V8.5Z"
                        stroke="#8F95B2"
                        stroke-width="1.5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_59_24383">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="sidebar__name">Settings</span>
              </Link>
            </li>
          </ul>
          <div className="sidebar__bottom">
            <UserNav />
            <p className="sidebar__name">Aryan</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

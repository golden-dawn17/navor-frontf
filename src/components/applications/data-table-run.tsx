"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Play } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";

interface DataTableRunProps<TData> {
  table: Table<TData>;
}

export function DataTableRun<TData>({ table }: DataTableRunProps<TData>) {
  return (
    <div>
      <Button
        variant="outline"
        size="sm"
        className="ml-auto hidden h-8 lg:flex"
        style={{ background: "#333333", color: "white", marginRight: "1rem" }}
      >
        <div className="flex" style={{ alignItems: "center" }}>
          <Play
            style={{ height: "0.75rem", width: "0.75rem", marginRight: "0.5rem" }}
          />
          <p style={{ fontSize: "12px" }}>Run</p>
        </div>
      </Button>
    </div>
  );
}

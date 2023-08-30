"use client"

import { ColumnDef } from "@tanstack/react-table"
import { labels, models, types } from "./data/data"
import { Task } from "./data/schema"
import { Badge } from "../ui/badge"
import { Checkbox } from "../ui/checkbox"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
    {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline"><p style={{fontWeight:"500"}}>{label.label}</p></Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => {
      const type = types.find((type) => type.value === row.getValue("type"))

      if (!type) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          <Badge variant="outline"><p style={{fontWeight:"500"}}>{type.label}</p></Badge>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "bing_query",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bing Query" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px] truncate font-medium">
        {row.getValue("bing_query")}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "document_query",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Document Query" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px] truncate font-medium">
        {row.getValue("document_query")}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "model",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Model" />
    ),
    cell: ({ row }) => {
      const model = models.find((model) => model.value === row.getValue("model"))

      if (!model) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          <Badge variant="outline"><p style={{fontWeight:"500"}}>{model.label}</p></Badge>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]

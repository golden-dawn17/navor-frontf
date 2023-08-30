import { DataTable } from "./data-table";
import { taskSchema } from "./data/schema";
import { columns } from "./columns";
import { z } from "zod";

// Simulate a database read for tasks.
function getSettingsData() {
    const data = require("@/components/settings/data/attributes.json");
    return z.array(taskSchema).parse(data);
  }

export function Attributes(){
    const settings = getSettingsData();
    return(
        <DataTable data={settings} columns={columns} />
    )
}
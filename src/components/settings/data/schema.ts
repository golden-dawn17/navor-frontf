"use client"
import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  label: z.string(),
  bing_query: z.string(),
  document_query: z.string(),
  model: z.string()
})

export type Task = z.infer<typeof taskSchema>

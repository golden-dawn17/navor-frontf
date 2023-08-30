"use client"
import fs from "fs"
import path from "path"
import { faker } from "@faker-js/faker"

import { labels, models, types } from "./data"

const tasks = Array.from({ length: 100 }, () => ({
  id: faker.datatype.number({ min: 1000, max: 9999 }),
  name: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  type: faker.helpers.arrayElement(types).value,
  label: faker.helpers.arrayElement(labels).value,
  bing_query: faker.datatype.string(),
  document_query: faker.datatype.string(),
  model: faker.datatype.string()
}))

fs.writeFileSync(
  path.join(__dirname, "applications.json"),
  JSON.stringify(tasks, null, 2)
)

console.log("✅ Tasks data generated.")

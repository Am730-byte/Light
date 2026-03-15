import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import csv from "csv-parser"
import prisma from "../src/lib/prisma.ts"

type CsvExerciseRow = {
  name: string
  equipment: string
  primary_muscle: string
  secondary_muscle: string
  source: string
  sourceType: string
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const csvPath = path.resolve(__dirname, "../src/data/exercises_data.csv")

const equipmentMap: Record<string, string> = {
  Barbell: "BARBELL",
  Dumbbell: "DUMBBELL",
  Machine: "MACHINE",
  "Resistance Band": "RESISTANCE_BAND",
  None: "NONE",
  Other: "OTHER",
  Suspension: "SUSPENSION",
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

async function main() {
  if (!fs.existsSync(csvPath)) {
    throw new Error(`Seed file not found at ${csvPath}`)
  }

  const exercises: CsvExerciseRow[] = await new Promise((resolve, reject) => {
    const rows: CsvExerciseRow[] = []

    fs.createReadStream(csvPath)
      .pipe(csv())
      .on("data", (row: CsvExerciseRow) => rows.push(row))
      .on("end", () => resolve(rows))
      .on("error", reject)
  })

  for (const row of exercises) {
    const equipment = equipmentMap[row.equipment] ?? "OTHER"
    const secondarymuscle =
      row.secondary_muscle && row.secondary_muscle !== "None"
        ? row.secondary_muscle.split(",").map((muscle) => muscle.trim())
        : []
    const source = row.source && row.source !== "None" ? row.source : null
    const sourcetype =
      row.sourceType === "image" || row.sourceType === "video"
        ? row.sourceType
        : "None"

    await prisma.exercise.upsert({
      where: { name: row.name },
      update: {
        slug: slugify(row.name),
        equipment,
        primarymuscle: row.primary_muscle,
        secondarymuscle,
        source,
        sourcetype,
      },
      create: {
        name: row.name,
        slug: slugify(row.name),
        equipment,
        primarymuscle: row.primary_muscle,
        secondarymuscle,
        source,
        sourcetype,
      },
    })
  }

  console.log(`Exercises seeded: ${exercises.length}`)
}

main()
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

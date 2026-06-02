export type Tier = {
  id: number
  name: string
  price: string
  tag: string | null
  desc: string
  examples: string[]
  waMessage: string
}

export const tiers: Tier[] = [
  {
    id: 1,
    name: "Single Source",
    price: "$5",
    tag: null,
    desc: "One academic task structured into a clear framework.",
    examples: [
      "One assignment or report",
      "One PDF or lecture note",
      "One voice note",
      "One set of screenshots",
    ],
    waMessage:
      "Hello, I have a single academic task. I will send it for structured preview evaluation.",
  },
  {
    id: 2,
    name: "Small Combo",
    price: "$9",
    tag: "Most common",
    desc: "2–3 academic materials structured into one framework.",
    examples: [
      "Brief + lecture slides",
      "Voice note + screenshots",
      "Lecture notes + PDF",
      "Any 2–3 item combination",
    ],
    waMessage:
      "Hello, I have 2–3 academic materials. I would like them structured into one framework. I will send them for preview.",
  },
  {
    id: 3,
    name: "Full Set",
    price: "$14",
    tag: null,
    desc: "Multiple academic materials combined into a structured output.",
    examples: [
      "Brief + slides + notes",
      "Voice note + PDF + screenshots",
      "3–5 mixed materials",
      "Multi-format academic task",
    ],
    waMessage:
      "Hello, I have multiple academic materials requiring structured consolidation. I will send everything for preview.",
  },
  {
    id: 4,
    name: "Complex Case",
    price: "$25",
    tag: "Advanced",
    desc: "Large or unclear academic material requiring deep restructuring.",
    examples: [
      "Multiple unclear documents",
      "Research-heavy tasks",
      "Cross-topic materials",
      "Undefined structure inputs",
    ],
    waMessage:
      "Hello, I have complex academic materials requiring deep restructuring. I will send everything for preview assessment.",
  },
]

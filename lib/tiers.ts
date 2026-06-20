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
    name: "Basic Structure",
    price: "$5",
    tag: "Quick clarity",
    desc: "For simple academic tasks that need basic structure and direction.",
    examples: [
      "Single assignment or topic",
      "One PDF or lecture note",
      "Short voice note explanation",
      "Simple academic prompt",
    ],
    waMessage:
      "Hello, I have a simple academic task. I need basic structure and clarity. I will send it for preview.",
  },
  {
    id: 2,
    name: "Standard Structure",
    price: "$9",
    tag: "Most common",
    desc: "For typical student work needing clear structured breakdown and flow.",
    examples: [
      "Assignment + lecture notes",
      "Voice note + screenshots",
      "PDF + brief instructions",
      "2–3 related materials",
    ],
    waMessage:
      "Hello, I have standard academic materials. I need a structured breakdown. I will send them for preview.",
  },
  {
    id: 3,
    name: "Advanced Structure",
    price: "$14",
    tag: "Higher complexity",
    desc: "For multi-part academic work requiring deeper organization and structure.",
    examples: [
      "Slides + notes + assignment brief",
      "Voice notes + PDFs + screenshots",
      "3–5 mixed academic materials",
      "Multi-section academic tasks",
    ],
    waMessage:
      "Hello, I have multiple academic materials requiring advanced structuring. I will send everything for preview.",
  },
  {
    id: 4,
    name: "Deep Restructure",
    price: "$25",
    tag: "Expert level",
    desc: "For complex academic content requiring full restructuring and clarity building.",
    examples: [
      "Unclear multi-document research",
      "Cross-topic academic materials",
      "Heavy or disorganized content",
      "High-complexity assignments",
    ],
    waMessage:
      "Hello, I have complex academic materials requiring deep restructuring. I will send everything for full preview assessment.",
  },
]

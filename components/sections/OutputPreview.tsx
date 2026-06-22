export default function OutputPreview() {
  return (
    <section className="px-6 py-16 border-t border-[#ddd9d0] bg-[#f6f3ee]">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#141210]">
          Your result
        </h2>

        <p className="mt-3 text-[#7a7367] max-w-2xl">
          A structured academic framework you can directly write from using your material.
        </p>

        {/* BEFORE / AFTER */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="border border-[#ddd9d0] rounded-xl p-6 bg-white">
            <h3 className="font-medium text-[#141210]">Before Qlack</h3>
            <p className="text-sm text-[#7a7367] mt-2 leading-relaxed">
              • Scattered notes and files<br/>
              • No clear structure<br/>
              • Unclear where to start<br/>
              • Difficulty organizing ideas
            </p>
          </div>

          <div className="border border-[#ddd9d0] rounded-xl p-6 bg-white">
            <h3 className="font-medium text-[#22c55e]">After Qlack</h3>
            <p className="text-sm text-[#7a7367] mt-2 leading-relaxed">
              • Clear essay structure<br/>
              • Defined introduction + body + conclusion<br/>
              • Logical argument flow<br/>
              • Step-by-step writing guidance
            </p>
          </div>

        </div>

        {/* REAL OUTPUT PREVIEW */}
        <div className="mt-12 border border-[#ddd9d0] rounded-xl p-6 bg-white">
          <h3 className="font-medium text-[#141210] mb-4">
            Example of what you receive
          </h3>

          <div className="text-sm text-[#7a7367] leading-relaxed space-y-3">
            <p><span className="text-[#141210]">Introduction:</span> Define the topic, explain key terms, and state your main argument.</p>

            <p><span className="text-[#141210]">Body Section 1:</span> Explain the first key point using examples from your material.</p>

            <p><span className="text-[#141210]">Body Section 2:</span> Analyze the second idea and connect it to the question.</p>

            <p><span className="text-[#141210]">Body Section 3:</span> Compare perspectives or evaluate supporting evidence.</p>

            <p><span className="text-[#141210]">Conclusion:</span> Summarize main arguments and provide final academic position.</p>
          </div>
        </div>

        {/* OUTPUT BREAKDOWN */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="border border-[#ddd9d0] rounded-xl p-6 bg-white">
            <h3 className="font-medium text-[#141210]">Introduction guide</h3>
            <p className="text-sm text-[#7a7367] mt-2">
              What to include at the start of your assignment.
            </p>
          </div>

          <div className="border border-[#ddd9d0] rounded-xl p-6 bg-white">
            <h3 className="font-medium text-[#141210]">Body structure</h3>
            <p className="text-sm text-[#7a7367] mt-2">
              How to organize your main arguments clearly.
            </p>
          </div>

          <div className="border border-[#ddd9d0] rounded-xl p-6 bg-white">
            <h3 className="font-medium text-[#141210]">Argument flow</h3>
            <p className="text-sm text-[#7a7367] mt-2">
              How ideas connect logically across sections.
            </p>
          </div>

          <div className="border border-[#ddd9d0] rounded-xl p-6 bg-white">
            <h3 className="font-medium text-[#141210]">Writing direction</h3>
            <p className="text-sm text-[#7a7367] mt-2">
              Exact guidance on what to write in each part.
            </p>
          </div>

        </div>

        {/* TRUST */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#7a7367] max-w-2xl mx-auto leading-relaxed">
            Qlack does not generate finished assignments. It converts your materials into a structured writing framework so you can write with clarity and direction.
          </p>
        </div>

      </div>
    </section>
  )
}

export default function OutputPreview() {
  return (
    <section className="px-6 py-16 border-t border-[#1e1e1e]">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
          Your result
        </h2>

        <p className="mt-3 text-[#b5b5b5] max-w-2xl">
          A structured writing framework you can immediately turn into an assignment.
        </p>

        {/* BEFORE / AFTER VISUALIZATION */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="border border-[#2a2a2a] rounded-xl p-6 bg-[#0f0f0f]">
            <h3 className="font-medium text-white">Before Qlack</h3>
            <p className="text-sm text-[#b5b5b5] mt-2 leading-relaxed">
              • Scattered notes<br/>
              • PDFs, screenshots, voice notes<br/>
              • No clear starting point<br/>
              • Confusion on structure
            </p>
          </div>

          <div className="border border-[#2a2a2a] rounded-xl p-6 bg-[#0f0f0f]">
            <h3 className="font-medium text-[#22c55e]">After Qlack</h3>
            <p className="text-sm text-[#b5b5b5] mt-2 leading-relaxed">
              • Clear introduction structure<br/>
              • Organized section headings<br/>
              • Logical argument flow<br/>
              • Step-by-step writing direction
            </p>
          </div>

        </div>

        {/* OUTPUT BREAKDOWN (MORE CONCRETE) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="border border-[#2a2a2a] rounded-xl p-6">
            <h3 className="font-medium text-white">Introduction structure</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              How to start your assignment clearly and academically.
            </p>
          </div>

          <div className="border border-[#2a2a2a] rounded-xl p-6">
            <h3 className="font-medium text-white">Section breakdown</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              Main body split into logical academic sections.
            </p>
          </div>

          <div className="border border-[#2a2a2a] rounded-xl p-6">
            <h3 className="font-medium text-white">Argument flow</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              How ideas connect from start to finish.
            </p>
          </div>

          <div className="border border-[#2a2a2a] rounded-xl p-6">
            <h3 className="font-medium text-white">Writing direction</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              What to write under each section using your material.
            </p>
          </div>

        </div>

        {/* STRONGER TRUST LINE */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#b5b5b5] max-w-2xl mx-auto leading-relaxed">
            Qlack does not generate final essays. It gives you a structured framework so you can write your assignment with clarity and direction.
          </p>
        </div>

      </div>
    </section>
  )
}

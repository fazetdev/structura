export default function SamplesPreview() {
  return (
    <section className="px-6 py-20 border-t border-[#ddd9d0] bg-[#f6f3ee]">
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h2 className="text-center text-3xl font-extrabold text-[#141210]">
          Example of what you receive
        </h2>

        <p className="text-center text-[#7a7367] mt-3 max-w-2xl mx-auto">
          A structured writing framework built from your assignment material — not a finished essay.
        </p>

        {/* SAMPLE CARD */}
        <div className="mt-10 bg-white border border-[#ddd9d0] p-8">

          <div className="text-sm text-[#7a7367] mb-2">
            Assignment Topic
          </div>

          <h3 className="text-xl font-semibold text-[#141210]">
            Impact of Social Media on Student Performance
          </h3>

          {/* BEFORE STYLE STRUCTURE */}
          <div className="mt-8 space-y-3 text-sm text-[#7a7367]">

            <div>
              <span className="font-medium text-[#141210]">1. Introduction</span>
              <div>How to introduce the topic and define key terms clearly.</div>
            </div>

            <div>
              <span className="font-medium text-[#141210]">2. Background of Study</span>
              <div>Context and supporting academic background to frame your argument.</div>
            </div>

            <div>
              <span className="font-medium text-[#141210]">3. Key Arguments</span>
              <div>Main points you should discuss based on your material.</div>
            </div>

            <div>
              <span className="font-medium text-[#141210]">4. Analysis & Discussion</span>
              <div>How to connect ideas and explain reasoning clearly.</div>
            </div>

            <div>
              <span className="font-medium text-[#141210]">5. Conclusion Framework</span>
              <div>How to summarize and close your assignment effectively.</div>
            </div>

          </div>
        </div>

        {/* TRUST CLOSER */}
        <p className="text-center text-sm text-[#7a7367] mt-10 max-w-2xl mx-auto">
          You don’t receive a written essay. You receive a structured guide that tells you exactly what to write in each section.
        </p>

      </div>
    </section>
  )
}

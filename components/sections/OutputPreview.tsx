export default function OutputPreview() {
  return (
    <section className="px-6 py-16 border-t border-[#1e1e1e]">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          What you get
        </h2>

        <p className="mt-3 text-[#b5b5b5] max-w-2xl">
          You don’t get a finished assignment. You get a clear structure that makes writing faster and easier.
        </p>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="border border-[#2a2a2a] rounded-xl p-6">
            <h3 className="font-medium">Structured outline</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              Introduction, body sections, arguments, and conclusion mapped clearly.
            </p>
          </div>

          <div className="border border-[#2a2a2a] rounded-xl p-6">
            <h3 className="font-medium">Logical flow</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              Your ideas arranged in academic order so your writing makes sense.
            </p>
          </div>

          <div className="border border-[#2a2a2a] rounded-xl p-6">
            <h3 className="font-medium">Section breakdown</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              Each part of your assignment separated into clear writing blocks.
            </p>
          </div>

          <div className="border border-[#2a2a2a] rounded-xl p-6">
            <h3 className="font-medium">Writing direction</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              Guidance on what to write in each section without doing the writing for you.
            </p>
          </div>

        </div>

        {/* Trust line */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[#b5b5b5]">
            Designed for students who already have material — but need structure, not confusion.
          </p>
        </div>

      </div>
    </section>
  )
}

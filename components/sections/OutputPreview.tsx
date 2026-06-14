export default function OutputPreview() {
  return (
    <section className="px-6 py-16 border-t border-[#1e1e1e]">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Your result
        </h2>

        <p className="mt-3 text-[#b5b5b5] max-w-2xl">
          Structure you can write from immediately.
        </p>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="border border-[#2a2a2a] rounded-xl p-6">
            <h3 className="font-medium">Structured outline</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              Introduction, body, arguments, conclusion.
            </p>
          </div>

          <div className="border border-[#2a2a2a] rounded-xl p-6">
            <h3 className="font-medium">Logical flow</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              Ideas arranged in academic order.
            </p>
          </div>

          <div className="border border-[#2a2a2a] rounded-xl p-6">
            <h3 className="font-medium">Section breakdown</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              Each part separated into structure blocks.
            </p>
          </div>

          <div className="border border-[#2a2a2a] rounded-xl p-6">
            <h3 className="font-medium">Writing direction</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              What to write in each section.
            </p>
          </div>

        </div>

        {/* Trust line */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[#b5b5b5]">
            Built for students stuck at the starting point.
          </p>
        </div>

      </div>
    </section>
  )
}

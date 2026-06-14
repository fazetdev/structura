export default function HowItWorks() {
  return (
    <section className="px-6 py-16 border-t border-[#1e1e1e]">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Simple process
        </h2>

        <p className="mt-3 text-[#b5b5b5] max-w-2xl">
          Send. Structure. Write.
        </p>

        {/* Steps */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="border border-[#2a2a2a] rounded-xl p-6">
            <div className="text-sm text-[#b5b5b5] mb-2">Step 1</div>
            <h3 className="font-medium">Send material</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              Notes, PDFs, screenshots, or voice notes.
            </p>
          </div>

          <div className="border border-[#2a2a2a] rounded-xl p-6">
            <div className="text-sm text-[#b5b5b5] mb-2">Step 2</div>
            <h3 className="font-medium">We structure it</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              Turn it into a clear academic structure.
            </p>
          </div>

          <div className="border border-[#2a2a2a] rounded-xl p-6">
            <div className="text-sm text-[#b5b5b5] mb-2">Step 3</div>
            <h3 className="font-medium">You write faster</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              Finish your work with structure.
            </p>
          </div>

        </div>

        {/* Micro CTA */}
        <div className="mt-10 text-center">
          <p className="text-[#b5b5b5] text-sm">
            No signup. Just WhatsApp.
          </p>
        </div>

      </div>
    </section>
  )
}

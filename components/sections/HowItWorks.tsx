export default function HowItWorks() {
  return (
    <section className="px-6 py-16 border-t border-[#1e1e1e]">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          How it works
        </h2>

        <p className="mt-3 text-[#b5b5b5] max-w-2xl">
          Simple process. No forms. No complexity. Just WhatsApp.
        </p>

        {/* Steps */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="border border-[#2a2a2a] rounded-xl p-6">
            <div className="text-sm text-[#b5b5b5] mb-2">Step 1</div>
            <h3 className="font-medium">Send your material</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              Voice notes, PDFs, screenshots, or messy instructions.
            </p>
          </div>

          <div className="border border-[#2a2a2a] rounded-xl p-6">
            <div className="text-sm text-[#b5b5b5] mb-2">Step 2</div>
            <h3 className="font-medium">We structure it</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              We convert it into a clean academic framework.
            </p>
          </div>

          <div className="border border-[#2a2a2a] rounded-xl p-6">
            <div className="text-sm text-[#b5b5b5] mb-2">Step 3</div>
            <h3 className="font-medium">You write faster</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              You complete your assignment with clarity and structure.
            </p>
          </div>

        </div>

        {/* Micro CTA */}
        <div className="mt-10 text-center">
          <p className="text-[#b5b5b5] text-sm">
            No account. No signup. Just WhatsApp.
          </p>
        </div>

      </div>
    </section>
  )
}

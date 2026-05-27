export default function HowItWorksPage() {
  return (
    <div className="container mt-20">

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl">
          How Structura Works
        </h1>

        <p className="text-[#7a7367] max-w-2xl mx-auto mt-4">
          You provide raw academic input. We return structured frameworks you can write from.
        </p>
      </div>

      <div className="space-y-6">

        <div className="border border-[#d8d2c4] bg-[var(--white)] p-6">
          <div className="text-sm font-semibold mb-2">Step 1 — Send Material</div>
          <p className="text-sm text-[#7a7367]">
            WhatsApp your voice notes, PDFs, screenshots, or assignment instructions.
          </p>
        </div>

        <div className="border border-[#d8d2c4] bg-[var(--white)] p-6">
          <div className="text-sm font-semibold mb-2">Step 2 — We Structure It</div>
          <p className="text-sm text-[#7a7367]">
            We organize your content into logical academic sections and flow.
          </p>
        </div>

        <div className="border border-[#d8d2c4] bg-[var(--white)] p-6">
          <div className="text-sm font-semibold mb-2">Step 3 — You Write</div>
          <p className="text-sm text-[#7a7367]">
            You receive a structured framework to complete your assignment yourself.
          </p>
        </div>

      </div>

      <div className="text-center mt-12">
        <a
          href="https://wa.me/2349036961611"
          className="btn"
        >
          Start on WhatsApp
        </a>
      </div>

    </div>
  )
}

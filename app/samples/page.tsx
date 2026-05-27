import { config } from "@/lib/config"

export default function SamplesPage() {
  return (
    <div className="container mt-20">

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl">
          Sample Structure Outputs
        </h1>

        <p className="text-[#7a7367] max-w-2xl mx-auto mt-4">
          Examples of how messy academic input is transformed into structured frameworks.
        </p>
      </div>

      {/* Sample 1 */}
      <div className="border border-[#d8d2c4] bg-[var(--white)] p-6 mb-6">
        <div className="text-xs uppercase tracking-widest text-[#7a7367] mb-3">
          Input: Messy assignment brief
        </div>

        <p className="text-sm text-[#7a7367] mb-4">
          “Write about leadership theories, include examples, and discuss modern applications…”
        </p>

        <div className="text-xs uppercase tracking-widest text-[#7a7367] mb-3">
          Output: Structured framework
        </div>

        <ul className="text-sm space-y-2">
          <li>1. Introduction to Leadership Theories</li>
          <li>2. Classical Leadership Models</li>
          <li>3. Modern Leadership Approaches</li>
          <li>4. Case Studies and Real Examples</li>
          <li>5. Critical Analysis</li>
          <li>6. Conclusion</li>
        </ul>
      </div>

      {/* Sample 2 */}
      <div className="border border-[#d8d2c4] bg-[var(--white)] p-6 mb-6">
        <div className="text-xs uppercase tracking-widest text-[#7a7367] mb-3">
          Input: Voice notes + lecture slides
        </div>

        <p className="text-sm text-[#7a7367] mb-4">
          “Explains marketing strategy confusion from lectures + notes.”
        </p>

        <div className="text-xs uppercase tracking-widest text-[#7a7367] mb-3">
          Output: Structured framework
        </div>

        <ul className="text-sm space-y-2">
          <li>1. Marketing Strategy Fundamentals</li>
          <li>2. Market Segmentation</li>
          <li>3. Targeting & Positioning</li>
          <li>4. Digital Marketing Channels</li>
          <li>5. Strategy Evaluation</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href={`https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(
            config.whatsapp.message
          )}`}
          className="btn"
        >
          Send Your Material
        </a>
      </div>

    </div>
  )
}

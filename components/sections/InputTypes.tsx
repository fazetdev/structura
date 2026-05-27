export default function InputTypes() {
  return (
    <section className="px-6 py-16 border-t border-[#1e1e1e]">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          What you can send
        </h2>

        <p className="mt-3 text-[#b5b5b5] max-w-2xl">
          Any messy academic material. We organize it into a clear structure you can actually write from.
        </p>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="border border-[#2a2a2a] rounded-xl p-5">
            <h3 className="font-medium">Text Inputs</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              Assignment instructions, lecture notes, rough ideas, essay drafts, WhatsApp messages.
            </p>
          </div>

          <div className="border border-[#2a2a2a] rounded-xl p-5">
            <h3 className="font-medium">Media Inputs</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              Voice notes, screenshots, photos of notes, whiteboards, LMS pages (Moodle, Canvas).
            </p>
          </div>

          <div className="border border-[#2a2a2a] rounded-xl p-5">
            <h3 className="font-medium">Documents</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              PDFs, Word files, PowerPoint slides, past assignments, marking rubrics.
            </p>
          </div>

          <div className="border border-[#2a2a2a] rounded-xl p-5">
            <h3 className="font-medium">Research Material</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              Articles, journal excerpts, YouTube lectures, links, case studies.
            </p>
          </div>

          <div className="border border-[#2a2a2a] rounded-xl p-5">
            <h3 className="font-medium">Mixed Inputs</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              Multiple files in one message, incomplete instructions, scattered ideas.
            </p>
          </div>

          <div className="border border-[#2a2a2a] rounded-xl p-5">
            <h3 className="font-medium">Unclear Work</h3>
            <p className="text-sm text-[#b5b5b5] mt-2">
              “I don’t understand this” situations — we structure it for you.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

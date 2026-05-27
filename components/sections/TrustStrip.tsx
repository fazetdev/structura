export default function TrustStrip() {
  return (
    <div className="container py-10">
      <div className="grid md:grid-cols-3 gap-6 text-center">

        <div className="card">
          <div className="text-lg font-semibold">Not Ghostwriting</div>
          <p className="text-muted text-sm mt-2">
            You write the final submission
          </p>
        </div>

        <div className="card">
          <div className="text-lg font-semibold">Structured Output</div>
          <p className="text-muted text-sm mt-2">
            Clear academic framework
          </p>
        </div>

        <div className="card">
          <div className="text-lg font-semibold">Fast Turnaround</div>
          <p className="text-muted text-sm mt-2">
            Usually within hours
          </p>
        </div>

      </div>
    </div>
  )
}

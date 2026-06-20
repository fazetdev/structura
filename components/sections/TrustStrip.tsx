export default function TrustStrip() {
  return (
    <div className="container py-10">
      <div className="grid md:grid-cols-3 gap-6 text-center">

        <div className="card">
          <div className="text-lg font-semibold">Not an essay writer</div>
          <p className="text-muted text-sm mt-2">
            Qlack does not write full assignments or submissions
          </p>
        </div>

        <div className="card">
          <div className="text-lg font-semibold">You stay in control</div>
          <p className="text-muted text-sm mt-2">
            You receive structure, not final academic content
          </p>
        </div>

        <div className="card">
          <div className="text-lg font-semibold">Built for clarity</div>
          <p className="text-muted text-sm mt-2">
            Designed to turn scattered material into a writing framework
          </p>
        </div>

      </div>
    </div>
  )
}

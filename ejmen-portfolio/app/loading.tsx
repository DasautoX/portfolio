export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-8 relative">
          <div className="w-16 h-16 rounded-full border-4 border-slate-700 border-t-blue-600 animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-display font-black text-sm">EJ</span>
          </div>
        </div>
        <h2 className="text-xl font-display font-semibold text-white mb-2">
          Loading Portfolio
        </h2>
        <p className="text-slate-400 text-sm">
          Please wait...
        </p>
      </div>
    </div>
  )
}
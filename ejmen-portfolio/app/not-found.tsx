export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-6">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-6">
            <span className="text-white font-display font-black text-2xl">404</span>
          </div>
          <h1 className="text-3xl font-display font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-slate-400 leading-relaxed mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        
        <a
          href="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}
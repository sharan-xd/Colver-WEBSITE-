import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-muted mb-4">404</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Page not found</h1>
        <p className="text-lg text-muted mb-8">
          The page you requested does not exist. Use the main navigation to continue.
        </p>
        <Link href="/" className="inline-flex px-6 py-3 rounded-full bg-primary text-white font-medium">
          Return home
        </Link>
      </div>
    </div>
  )
}
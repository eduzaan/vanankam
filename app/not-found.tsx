import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="text-center max-w-md">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="text-8xl">🍵</div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl opacity-50">
            ❌
          </div>
        </div>

        <h1 className="text-6xl font-heading font-bold text-accent mb-4">404</h1>
        <h2 className="text-2xl font-heading font-bold text-primary-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-primary mb-8">
          Looks like this chai got spilled! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

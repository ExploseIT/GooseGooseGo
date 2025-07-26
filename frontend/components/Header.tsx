import Link from 'next/link'

export default function Header() {
  return (
    <nav className="flex justify-between items-center py-4 border-b mb-4">
      <Link href="/" className="text-xl font-bold text-yellow-600">GooseGooseGo</Link>
      <div className="space-x-4">
        <Link href="/login" className="text-sm">Login</Link>
        <Link href="/register" className="text-sm">Register</Link>
      </div>
    </nav>
  )
}

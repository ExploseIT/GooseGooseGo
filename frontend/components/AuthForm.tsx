interface AuthFormProps {
  mode: 'login' | 'register'
}

export default function AuthForm({ mode }: AuthFormProps) {
  return (
    <div className="max-w-sm mx-auto mt-12 p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">{mode === 'login' ? 'Login' : 'Register'}</h2>
      <form>
        <input type="email" placeholder="Email" className="w-full mb-2 p-2 border" />
        <input type="password" placeholder="Password" className="w-full mb-4 p-2 border" />
        <button className="bg-yellow-500 text-white px-4 py-2 rounded w-full">
          {mode === 'login' ? 'Log In' : 'Register'}
        </button>
      </form>
    </div>
  )
}

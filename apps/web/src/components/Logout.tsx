import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import router from 'next/router'
import { LogOut } from 'lucide-react'

export default function Logout() {
  const { signout } = useContext(AuthContext)

  const handleLogout = () => {
    setTimeout(() => {
      signout()

      router.push('/auth/signin')
    }, 500)
  }

  return (
    <button
      onClick={handleLogout}
      className="flex items-center rounded bg-blue-400 px-3 py-3 transition-all hover:bg-blue-500"
    >
      <LogOut size={20} />
      Logout
    </button>
  )
}

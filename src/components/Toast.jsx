import { CheckCircle, X } from 'lucide-react'
import { useEffect } from 'react'

export default function Toast({ message, onClose }) {
  useEffect(()=> {
    const t = setTimeout(onClose, 3000)
    return ()=> clearTimeout(t)
  }, [onClose])
  if (!message) return null
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#0B2447] text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 animate-in slide-in-from-bottom-2">
      <CheckCircle size={18} className="text-emerald-400"/>
      <span className="text-sm font-medium">{message}</span>
      <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100"><X size={16}/></button>
    </div>
  )
}

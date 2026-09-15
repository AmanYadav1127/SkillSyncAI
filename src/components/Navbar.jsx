import { Link, useLocation, useNavigate } from 'react-router-dom'
import { GraduationCap, Building2, Landmark, ArrowLeftRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar({ showSwitch = true }) {
  const loc = useLocation()
  const nav = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isLanding = loc.pathname === '/'
  const isGov = loc.pathname.startsWith('/government')
  const isCompany = loc.pathname.startsWith('/company')
  const isStudent = loc.pathname.startsWith('/student')

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[64px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#0B2447] flex items-center justify-center">
            <span className="text-white font-bold text-[13px] tracking-widest">SS</span>
          </div>
          <div className="leading-none">
            <div className="font-bold text-[15px] text-[#0B2447] tracking-tight">SkillSync AI</div>
            <div className="text-[10px] tracking-[0.14em] text-slate-500 font-semibold">GOVTECH • MAHARASHTRA</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          {isLanding ? (
            <>
              <a href="#how" className="hover:text-slate-900">How It Works</a>
              <a href="#stakeholders" className="hover:text-slate-900">For Students</a>
              <a href="#stakeholders" className="hover:text-slate-900">For Companies</a>
              <a href="#stakeholders" className="hover:text-slate-900">For Government</a>
            </>
          ) : (
            <>
              {isStudent && (
                <>
                  <Link to="/student" className={loc.pathname==='/student' ? 'text-[#0B2447] border-b-2 border-[#0B2447] pb-1' : 'hover:text-slate-900'}>Dashboard</Link>
                  <Link to="/student/skill-gap" className={loc.pathname.includes('skill-gap') ? 'text-[#0B2447] border-b-2 border-[#0B2447] pb-1' : 'hover:text-slate-900'}>Skill Gap</Link>
                  <Link to="/student/recommendations" className={loc.pathname.includes('recommendations') ? 'text-[#0B2447] border-b-2 border-[#0B2447] pb-1' : 'hover:text-slate-900'}>Recommendations</Link>
                </>
              )}
              {isCompany && (
                <>
                  <Link to="/company" className={loc.pathname==='/company' ? 'text-[#0B2447] border-b-2 border-[#0B2447] pb-1' : 'hover:text-slate-900'}>Dashboard</Link>
                  <Link to="/company/requirements" className={loc.pathname.includes('requirements') ? 'text-[#0B2447] border-b-2 border-[#0B2447] pb-1' : 'hover:text-slate-900'}>Skill Requirements</Link>
                </>
              )}
              {isGov && (
                <>
                  <Link to="/government" className={loc.pathname==='/government' ? 'text-[#0B2447] border-b-2 border-[#0B2447] pb-1' : 'hover:text-slate-900'}>Dashboard</Link>
                  <Link to="/government/course-gaps" className={loc.pathname.includes('course-gaps') ? 'text-[#0B2447] border-b-2 border-[#0B2447] pb-1' : 'hover:text-slate-900'}>Course Gaps</Link>
                </>
              )}
            </>
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {showSwitch && !isLanding && (
            <div className="flex items-center gap-1 bg-slate-100 rounded-full p-1">
              <button onClick={()=>nav('/student')} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition ${isStudent ? 'bg-white shadow text-[#0B2447]' : 'text-slate-600 hover:text-slate-900'}`}><GraduationCap size={14}/>Student</button>
              <button onClick={()=>nav('/company')} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition ${isCompany ? 'bg-white shadow text-[#0B2447]' : 'text-slate-600 hover:text-slate-900'}`}><Building2 size={14}/>Company</button>
              <button onClick={()=>nav('/government')} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition ${isGov ? 'bg-white shadow text-[#0B2447]' : 'text-slate-600 hover:text-slate-900'}`}><Landmark size={14}/>Government</button>
            </div>
          )}
          {isLanding ? (
            <Link to="/roles" className="bg-[#0B2447] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#12325f] transition">Explore Platform</Link>
          ) : (
            <button onClick={()=>nav('/roles')} className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-slate-600 border border-slate-200 px-3 py-2 rounded-full hover:bg-slate-50"><ArrowLeftRight size={14}/> Switch Portal</button>
          )}
        </div>

        <button className="lg:hidden p-2" onClick={()=>setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3">
          {isLanding ? (
            <>
              <a href="#how" className="block text-sm font-medium">How It Works</a>
              <Link to="/roles" className="block bg-[#0B2447] text-white text-center px-5 py-3 rounded-full text-sm font-semibold">Explore Platform</Link>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-2 text-sm font-medium">
                {isStudent && (<><Link to="/student" onClick={()=>setMobileOpen(false)}>Dashboard</Link><Link to="/student/skill-gap" onClick={()=>setMobileOpen(false)}>Skill Gap</Link><Link to="/student/recommendations" onClick={()=>setMobileOpen(false)}>Recommendations</Link></>)}
                {isCompany && (<><Link to="/company" onClick={()=>setMobileOpen(false)}>Dashboard</Link><Link to="/company/requirements" onClick={()=>setMobileOpen(false)}>Requirements</Link></>)}
                {isGov && (<><Link to="/government" onClick={()=>setMobileOpen(false)}>Dashboard</Link><Link to="/government/course-gaps" onClick={()=>setMobileOpen(false)}>Course Gaps</Link></>)}
              </div>
              <div className="flex gap-2 pt-2">
                <button onClick={()=>{nav('/student'); setMobileOpen(false)}} className="flex-1 border rounded-full py-2 text-xs font-semibold">Student</button>
                <button onClick={()=>{nav('/company'); setMobileOpen(false)}} className="flex-1 border rounded-full py-2 text-xs font-semibold">Company</button>
                <button onClick={()=>{nav('/government'); setMobileOpen(false)}} className="flex-1 border rounded-full py-2 text-xs font-semibold">Gov</button>
              </div>
            </>
          )}
        </div>
      )}
    </header>
  )
}

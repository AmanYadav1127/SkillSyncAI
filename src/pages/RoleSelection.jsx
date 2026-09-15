import { Link } from 'react-router-dom'
import { GraduationCap, Building2, Landmark, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'

export default function RoleSelection(){
  const cards = [
    { to:"/student", icon: GraduationCap, title:"Student", subtitle:"I want to become industry-ready", desc:"Get your Industry Readiness Score, skill-gap analysis and personalized course recommendations.", stats:"12,450 students onboarded", color:"bg-emerald-600", border:"hover:border-emerald-200 hover:bg-emerald-50/50" },
    { to:"/company", icon: Building2, title:"Company", subtitle:"I want to share skill requirements", desc:"Define skills your company needs and contribute to statewide skill intelligence.", stats:"186 companies contributing", color:"bg-blue-600", border:"hover:border-blue-200 hover:bg-blue-50/50" },
    { to:"/government", icon: Landmark, title:"Government", subtitle:"I want to view skill intelligence", desc:"Monitor industry demand, emerging trends and identify where training programs need creation.", stats:"Maharashtra • 742 skills tracked", color:"bg-amber-600", border:"hover:border-amber-200 hover:bg-amber-50/50" },
  ]
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex bg-white border border-slate-200 rounded-full px-3 py-1 text-xs font-semibold text-slate-600">DEMO PORTALS • NO AUTH REQUIRED</div>
          <h1 className="mt-4 text-[30px] lg:text-[36px] font-extrabold text-[#0B2447] tracking-tight">Choose your portal</h1>
          <p className="mt-2 text-sm text-slate-600">Experience SkillSync AI from each stakeholder perspective. Switch anytime with the portal toggle.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {cards.map(c=>(
            <Link key={c.title} to={c.to} className={`group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm transition ${c.border} hover:shadow-md flex flex-col`}>
              <div className={`w-12 h-12 rounded-xl ${c.color} text-white flex items-center justify-center`}><c.icon size={22}/></div>
              <div className="mt-4 text-lg font-extrabold text-[#0B2447]">{c.title}</div>
              <div className="text-xs font-semibold text-slate-500">{c.subtitle}</div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">{c.desc}</p>
              <div className="mt-4 text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5 inline-flex self-start">{c.stats}</div>
              <div className="mt-5 inline-flex items-center gap-2 bg-[#0B2447] text-white px-5 py-2.5 rounded-full text-sm font-semibold group-hover:bg-[#12325f] transition">
                Enter {c.title} Portal <ArrowRight size={16}/>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-start gap-2.5">
          <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold shrink-0">!</span>
          <p className="text-xs text-amber-900 leading-relaxed"><span className="font-bold">SIH Presenter Tip:</span> Start with Company → Student → Government to show the full feedback loop. Use the “Switch Portal” toggle in the header.</p>
        </div>
      </div>
    </div>
  )
}

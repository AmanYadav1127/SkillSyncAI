import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { Building2, Users, Layers, Flame, Gauge, ArrowRight } from 'lucide-react'
import { companyInfo, companyTopSkills, jobRoles } from '../data/mockData'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, Cell } from 'recharts'

export default function CompanyDashboard(){
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar/>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B2447] text-white flex items-center justify-center"><Building2 size={18}/></div>
            <div>
              <h1 className="text-[18px] font-extrabold text-[#0B2447] leading-none">{companyInfo.name}</h1>
              <p className="text-xs text-slate-600">{companyInfo.industry} • {companyInfo.location}</p>
            </div>
          </div>
          <Link to="/company/requirements" className="inline-flex items-center gap-2 bg-[#0B2447] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#12325f]">Update Skill Requirements <ArrowRight size={16}/></Link>
        </div>

        <div className="mt-2 text-[22px] font-extrabold text-[#0B2447]">Industry Skill Demand</div>
        <p className="text-sm text-slate-600">Your contribution to Maharashtra skill intelligence.</p>

        <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label:"Open Positions", value: companyInfo.openPositions, icon: Users, color:"text-blue-600", bg:"bg-blue-50 border-blue-200" },
            { label:"Skills Tracked", value: companyInfo.skillsTracked, icon: Layers, color:"text-violet-600", bg:"bg-violet-50 border-violet-200" },
            { label:"High-Demand Skills", value: companyInfo.highDemand, icon: Flame, color:"text-amber-600", bg:"bg-amber-50 border-amber-200" },
            { label:"Talent Readiness", value: companyInfo.talentReadiness+"%", icon: Gauge, color:"text-emerald-600", bg:"bg-emerald-50 border-emerald-200" },
          ].map(m=>(
            <div key={m.label} className={`bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex items-center gap-3`}>
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${m.bg} ${m.color}`}><m.icon size={18}/></div>
              <div>
                <div className="text-[20px] font-extrabold text-[#0B2447] leading-none">{m.value}</div>
                <div className="text-xs font-semibold text-slate-500">{m.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid lg:grid-cols-[1.4fr_0.8fr] gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-[#0B2447]">Top Skills Required</h3>
            <p className="text-xs text-slate-500">Demand score based on your open positions</p>
            <div className="h-[280px] mt-3">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={companyTopSkills} layout="vertical" margin={{ left: 10, right: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false}/>
                  <XAxis type="number" domain={[0,100]} tick={{fontSize:11}} axisLine={false} tickLine={false}/>
                  <YAxis dataKey="name" type="category" width={110} tick={{fontSize:12, fontWeight:600, fill:'#0B2447'}} axisLine={false} tickLine={false}/>
                  <Tooltip/>
                  <Bar dataKey="demand" radius={[0,8,8,0]} barSize={18}>
                    {companyTopSkills.map((e,i)=><Cell key={i} fill={i<2 ? '#0B2447' : i<4 ? '#2563eb' : '#93c5fd'}/>)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-[#0B2447]">Open Positions by Role</h3>
            <div className="mt-3 overflow-hidden border border-slate-200 rounded-xl">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-xs font-bold tracking-wide text-slate-500">
                  <tr><th className="text-left px-3 py-2.5">Job Role</th><th className="text-center px-3 py-2.5">Positions</th><th className="text-left px-3 py-2.5">Priority</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {jobRoles.map(j=>(
                    <tr key={j.role} className="hover:bg-slate-50">
                      <td className="px-3 py-3 font-semibold text-[#0B2447]">{j.role}</td>
                      <td className="px-3 py-3 text-center font-bold">{j.positions}</td>
                      <td className="px-3 py-3"><span className={`px-2 py-1 rounded-full text-xs font-bold ${j.priority==='High' ? 'bg-red-100 text-red-700 border border-red-200' : 'bg-amber-100 text-amber-700 border border-amber-200'}`}>{j.priority}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-900 leading-relaxed">
              <span className="font-bold">Note:</span> Updating requirements will immediately contribute to aggregated industry skill intelligence used by students and government.
            </div>
            <Link to="/company/requirements" className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-[#0B2447] text-white py-2.5 rounded-full text-sm font-semibold">Manage Requirements <ArrowRight size={14}/></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

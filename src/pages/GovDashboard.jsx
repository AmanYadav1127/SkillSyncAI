import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { AlertTriangle, TrendingUp, Users, Layers, GraduationCap, Building2, ArrowRight } from 'lucide-react'
import { govMetrics, industryDemand, emergingTrends, criticalGaps } from '../data/mockData'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, Cell, LineChart, Line } from 'recharts'

export default function GovDashboard(){
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar/>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 text-xs font-bold text-amber-800">🏛️ GOVERNMENT • MAHARASHTRA</div>
            <h1 className="mt-2 text-[24px] font-extrabold text-[#0B2447]">Maharashtra Skill Intelligence Dashboard</h1>
            <p className="text-sm text-slate-600">Industry demand, workforce readiness and training gaps.</p>
          </div>
          <Link to="/government/course-gaps" className="inline-flex items-center gap-2 bg-[#0B2447] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#12325f]">View Course Gap Analysis <ArrowRight size={16}/></Link>
        </div>

        <div className="mt-5 grid grid-cols-2 lg:grid-cols-6 gap-3">
          {govMetrics.map(m=>(
            <div key={m.label} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-center">
              <div className="text-[20px] font-extrabold text-[#0B2447]">{m.value}</div>
              <div className="text-[11px] font-bold tracking-wide text-slate-500 leading-tight mt-1">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-[#0B2447]">Top Industry Skill Demand</h3>
            <p className="text-xs text-slate-500">Aggregated from 186 companies • % of roles requiring skill</p>
            <div className="h-[300px] mt-3">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={industryDemand} layout="vertical" margin={{ left: 10, right: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false}/>
                  <XAxis type="number" domain={[0,100]} tick={{fontSize:11}} axisLine={false} tickLine={false}/>
                  <YAxis dataKey="name" type="category" width={120} tick={{fontSize:11, fontWeight:600, fill:'#0B2447'}} axisLine={false} tickLine={false}/>
                  <Tooltip/>
                  <Bar dataKey="demand" radius={[0,8,8,0]} barSize={16}>
                    {industryDemand.map((_,i)=><Cell key={i} fill={i===0 ? '#0B2447' : i<3 ? '#1e40af' : '#60a5fa'}/>)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-[#0B2447]">Emerging Skill Trends</h3>
            <p className="text-xs text-slate-500">Fastest growing demand • YoY increase</p>
            <div className="h-[200px] mt-3">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={emergingTrends}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                  <XAxis dataKey="name" tick={{fontSize:10, fontWeight:600}} interval={0} angle={-10} height={50} tickLine={false} axisLine={false}/>
                  <YAxis domain={[0,100]} tick={{fontSize:11}} width={30} axisLine={false} tickLine={false}/>
                  <Tooltip/>
                  <Bar dataKey="value" radius={[8,8,0,0]} barSize={38}>
                    {emergingTrends.map((_,i)=><Cell key={i} fill={i===0 ? '#dc2626' : i===1 ? '#ea580c' : i===2 ? '#d97706' : '#16a34a'}/>)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
              <TrendingUp size={16} className="text-amber-600 mt-0.5"/>
              <p className="text-xs text-amber-900 leading-relaxed"><span className="font-bold">Insight:</span> Generative AI demand grew 89% — but course coverage only 18%. Critical training gap.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#0B2447] flex items-center gap-2"><AlertTriangle size={16} className="text-red-600"/> Critical Skill Gaps</h3>
            <Link to="/government/course-gaps" className="text-xs font-semibold text-blue-600 hover:underline">View all gaps →</Link>
          </div>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {criticalGaps.map(g=>(
              <div key={g.skill} className={`border rounded-xl p-4 ${g.status==='Critical' ? 'bg-red-50 border-red-200' : 'bg-amber-50 border-amber-200'}`}>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-extrabold text-[#0B2447]">{g.skill}</div>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${g.status==='Critical' ? 'bg-red-600 text-white' : 'bg-amber-500 text-white'}`}>{g.status}</span>
                </div>
                <div className="mt-3 space-y-1.5 text-xs">
                  <div className="flex justify-between"><span className="text-slate-600">Demand:</span><span className="font-bold">{g.demand}%</span></div>
                  <div className="flex justify-between"><span className="text-slate-600">Course Coverage:</span><span className="font-bold">{g.coverage}%</span></div>
                  <div className="flex justify-between"><span className="text-slate-600">Gap:</span><span className="font-bold text-red-600">{g.gap}%</span></div>
                </div>
                <div className="mt-3 h-2 bg-white rounded-full overflow-hidden border border-slate-200">
                  <div className="h-full bg-red-500" style={{width: `${g.gap}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

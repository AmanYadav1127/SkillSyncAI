import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { Target, Award, TrendingUp, BookOpen, ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { mockStudent, topGaps } from '../data/mockData'

function CircularProgress({ value }){
  const r=54, c=2*Math.PI*r, offset=c - (value/100)*c
  return (
    <div className="relative w-[132px] h-[132px]">
      <svg width="132" height="132" className="-rotate-90">
        <circle cx="66" cy="66" r={r} stroke="#e2e8f0" strokeWidth="10" fill="none"/>
        <circle cx="66" cy="66" r={r} stroke="#0B2447" strokeWidth="10" fill="none" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={offset} className="transition-all duration-700"/>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-[28px] font-extrabold text-[#0B2447] leading-none">{value}<span className="text-sm font-bold">/100</span></div>
        <div className="text-[10px] font-bold tracking-widest text-slate-500 mt-1">READINESS</div>
      </div>
    </div>
  )
}

export default function StudentDashboard(){
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-[22px] lg:text-[26px] font-extrabold text-[#0B2447]">Good morning, {mockStudent.name} 👋</h1>
            <p className="text-sm text-slate-600">Let’s get you industry-ready. <span className="font-semibold text-slate-800">{mockStudent.education}</span> • Target: <span className="text-[#0B2447] font-bold">{mockStudent.targetRole}</span></p>
          </div>
          <Link to="/student/skill-gap" className="inline-flex items-center gap-2 bg-[#0B2447] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#12325f]">View Skill Gap Analysis <ArrowRight size={16}/></Link>
        </div>

        <div className="mt-6 grid lg:grid-cols-[360px_1fr] gap-6">
          {/* Readiness card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="text-xs font-bold tracking-widest text-slate-500">INDUSTRY READINESS SCORE</div>
            <div className="mt-4 flex items-center gap-5">
              <CircularProgress value={mockStudent.readiness}/>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-600"/><span className="font-semibold">{mockStudent.skillsMatched} / {mockStudent.totalSkills}</span><span className="text-slate-500">Skills Matched</span></div>
                <div className="flex items-center gap-2"><AlertTriangle size={16} className="text-amber-500"/><span className="font-semibold">{mockStudent.toImprove}</span><span className="text-slate-500">Skills to Improve</span></div>
                <div className="flex items-center gap-2"><BookOpen size={16} className="text-blue-600"/><span className="font-semibold">{mockStudent.recommendedCount}</span><span className="text-slate-500">Recommended Courses</span></div>
                <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-800">
                  Completing recommendations could boost you to <span className="font-bold">91%</span> readiness.
                </div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              <div className="bg-slate-50 border border-slate-200 rounded-xl py-2.5"><div className="text-xs font-bold text-slate-500">MATCHED</div><div className="text-lg font-extrabold text-emerald-600">{mockStudent.skillsMatched}</div></div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl py-2.5"><div className="text-xs font-bold text-slate-500">GAPS</div><div className="text-lg font-extrabold text-amber-600">{mockStudent.toImprove}</div></div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl py-2.5"><div className="text-xs font-bold text-slate-500">COURSES</div><div className="text-lg font-extrabold text-blue-600">{mockStudent.recommendedCount}</div></div>
            </div>
          </div>

          {/* gaps + snapshot */}
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#0B2447]">Your Top Skill Gaps</h3>
                <Link to="/student/skill-gap" className="text-xs font-semibold text-blue-600 hover:underline">View all →</Link>
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {topGaps.map(g=>(
                  <div key={g.skill} className="border border-slate-200 rounded-xl p-4 bg-slate-50/60">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-bold text-[#0B2447]">{g.skill}</div>
                      <span className={`text-[11px] font-bold px-2 py-1 rounded-full ${g.gap==='Critical' ? 'bg-red-100 text-red-700 border border-red-200' : g.gap==='High' ? 'bg-amber-100 text-amber-700 border border-amber-200' : 'bg-slate-100 text-slate-700 border border-slate-200'}`}>{g.gap}</span>
                    </div>
                    <div className="mt-2 text-xs text-slate-600 space-y-1">
                      <div className="flex justify-between"><span>Your level:</span><span className="font-semibold">{g.yourLevel}</span></div>
                      <div className="flex justify-between"><span>Required:</span><span className="font-semibold text-[#0B2447]">{g.required}</span></div>
                    </div>
                    <div className="mt-3 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${g.gap==='Critical' ? 'bg-red-500 w-[90%]' : g.gap==='High' ? 'bg-amber-500 w-[70%]' : 'bg-blue-500 w-[40%]'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <h3 className="text-sm font-bold text-[#0B2447]">Industry Snapshot</h3>
                <div className="mt-3 space-y-2.5 text-sm">
                  <div className="flex justify-between"><span className="text-slate-500">Current target role:</span><span className="font-semibold">{mockStudent.targetRole}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Industry demand:</span><span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold border border-emerald-200">High</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Companies analyzed:</span><span className="font-semibold">186</span></div>
                  <div className="pt-3 border-t border-slate-200">
                    <div className="text-xs font-bold tracking-wide text-slate-500 mb-2">TOP DEMANDED SKILLS</div>
                    <div className="flex flex-wrap gap-1.5">
                      {["React.js","Node.js","PostgreSQL","Docker","AWS"].map(s=>(
                        <span key={s} className="px-2.5 py-1 bg-[#0B2447] text-white rounded-full text-xs font-semibold">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0B2447] to-[#1e4a8a] rounded-2xl p-5 text-white">
                <h3 className="text-sm font-bold">Next Step</h3>
                <p className="mt-2 text-sm opacity-90 leading-relaxed">Your biggest gap is <span className="font-bold">React.js</span> — required in 78% of Full Stack roles. Beginner → Advanced is your highest priority.</p>
                <Link to="/student/recommendations" className="mt-4 inline-flex items-center gap-2 bg-white text-[#0B2447] px-4 py-2 rounded-full text-sm font-bold">View Recommended Courses <ArrowRight size={14}/></Link>
                <div className="mt-4 bg-white/10 rounded-xl p-3 flex items-center justify-between text-xs">
                  <span className="opacity-80">Projected readiness</span><span className="font-bold">72% → 91%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

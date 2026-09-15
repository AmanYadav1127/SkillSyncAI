export const mockStudent = {
  name: "Rahul Sharma",
  education: "B.Tech Computer Science",
  targetRole: "Full Stack Developer",
  readiness: 72,
  projectedReadiness: 91,
  skillsMatched: 8,
  totalSkills: 11,
  toImprove: 3,
  recommendedCount: 5,
}

export const skillGaps = [
  { skill: "React.js", yourLevel: "Beginner", required: "Advanced", gap: "High", priority: "Critical", yourScore: 2, reqScore: 5 },
  { skill: "Node.js", yourLevel: "None", required: "Intermediate", gap: "Critical", priority: "Critical", yourScore: 0, reqScore: 3 },
  { skill: "PostgreSQL", yourLevel: "Intermediate", required: "Intermediate", gap: "None", priority: "Matched", yourScore: 3, reqScore: 3 },
  { skill: "Git", yourLevel: "Intermediate", required: "Intermediate", gap: "None", priority: "Matched", yourScore: 3, reqScore: 3 },
  { skill: "Docker", yourLevel: "None", required: "Beginner", gap: "Medium", priority: "Medium", yourScore: 0, reqScore: 2 },
  { skill: "REST APIs", yourLevel: "Beginner", required: "Intermediate", gap: "Medium", priority: "High", yourScore: 2, reqScore: 3 },
  { skill: "JavaScript", yourLevel: "Intermediate", required: "Advanced", gap: "Medium", priority: "High", yourScore: 3, reqScore: 5 },
  { skill: "SQL", yourLevel: "Intermediate", required: "Intermediate", gap: "None", priority: "Matched", yourScore: 3, reqScore: 3 },
  { skill: "Cloud", yourLevel: "None", required: "Beginner", gap: "Medium", priority: "Medium", yourScore: 0, reqScore: 2 },
]

export const topGaps = [
  { skill: "React.js", yourLevel: "Beginner", required: "Advanced", gap: "High" },
  { skill: "Node.js", yourLevel: "None", required: "Intermediate", gap: "Critical" },
  { skill: "Docker", yourLevel: "None", required: "Beginner", gap: "Medium" },
  { skill: "REST APIs", yourLevel: "Beginner", required: "Intermediate", gap: "Medium" },
]

export const radarData = [
  { skill: "React.js", student: 35, required: 90 },
  { skill: "JavaScript", student: 65, required: 85 },
  { skill: "Node.js", student: 10, required: 70 },
  { skill: "SQL", student: 60, required: 60 },
  { skill: "Docker", student: 15, required: 45 },
  { skill: "Cloud", student: 20, required: 50 },
  { skill: "APIs", student: 40, required: 70 },
]

export const courses = [
  {
    id: 1,
    title: "Advanced React Development",
    skill: "React.js",
    duration: "8 weeks",
    level: "Intermediate → Advanced",
    relevance: 96,
    reason: "Addresses your highest-priority skill gap.",
    provider: "MahaTech Academy",
    color: "bg-blue-600",
    modules: ["Hooks & Advanced Patterns", "State Management", "Performance", "Testing"]
  },
  {
    id: 2,
    title: "Node.js Backend Development",
    skill: "Node.js",
    duration: "6 weeks",
    level: "Beginner → Intermediate",
    relevance: 91,
    reason: "Critical for Full Stack roles — 76% of jobs need it.",
    provider: "Pune Digital Labs",
    color: "bg-emerald-600",
    modules: ["Express.js", "Database Integration", "Auth & Security", "Deployment"]
  },
  {
    id: 3,
    title: "Docker & Cloud Fundamentals",
    skill: "Docker",
    duration: "4 weeks",
    level: "Beginner",
    relevance: 84,
    reason: "High industry demand, low student coverage.",
    provider: "Konkan CloudWorks",
    color: "bg-sky-600",
    modules: ["Containers", "Docker Compose", "CI/CD", "AWS Basics"]
  },
  {
    id: 4,
    title: "REST API Development",
    skill: "REST APIs",
    duration: "4 weeks",
    level: "Beginner → Intermediate",
    relevance: 82,
    reason: "Essential for Full Stack Developer readiness.",
    provider: "Vidarbha Analytics",
    color: "bg-violet-600",
    modules: ["API Design", "Authentication", "Documentation", "Testing"]
  },
]

export const companyInfo = {
  name: "TechNova Solutions",
  industry: "Information Technology",
  location: "Pune, Maharashtra",
  openPositions: 24,
  skillsTracked: 38,
  highDemand: 12,
  talentReadiness: 64,
}

export const companyTopSkills = [
  { name: "React.js", demand: 92 },
  { name: "Node.js", demand: 84 },
  { name: "Python", demand: 78 },
  { name: "SQL", demand: 74 },
  { name: "AWS", demand: 68 },
  { name: "Docker", demand: 62 },
  { name: "Cybersecurity", demand: 58 },
]

export const jobRoles = [
  { role: "Full Stack Developer", positions: 12, priority: "High" },
  { role: "Data Analyst", positions: 5, priority: "Medium" },
  { role: "Cloud Engineer", positions: 4, priority: "High" },
  { role: "Cybersecurity Analyst", positions: 3, priority: "High" },
]

export const companySkillsEditable = [
  { skill: "React.js", level: "Advanced", importance: "Critical" },
  { skill: "Node.js", level: "Intermediate", importance: "High" },
  { skill: "PostgreSQL", level: "Intermediate", importance: "High" },
  { skill: "Docker", level: "Beginner", importance: "Medium" },
  { skill: "AWS", level: "Beginner", importance: "Medium" },
]

export const govMetrics = [
  { label: "Students Analyzed", value: "12,450" },
  { label: "Companies", value: "186" },
  { label: "Skills Tracked", value: "742" },
  { label: "Emerging Skills", value: "94" },
  { label: "Critical Skill Gaps", value: "27" },
  { label: "Courses Requiring Update", value: "14" },
]

export const industryDemand = [
  { name: "Python", demand: 88 },
  { name: "React.js", demand: 84 },
  { name: "SQL", demand: 81 },
  { name: "Cloud Computing", demand: 82 },
  { name: "Data Analytics", demand: 76 },
  { name: "Cybersecurity", demand: 79 },
  { name: "AI/ML", demand: 74 },
  { name: "Docker", demand: 65 },
]

export const emergingTrends = [
  { name: "Generative AI", value: 89 },
  { name: "Cloud Computing", value: 82 },
  { name: "Cybersecurity", value: 79 },
  { name: "Data Engineering", value: 73 },
  { name: "AI Agents", value: 76 },
]

export const criticalGaps = [
  { skill: "Generative AI", demand: 89, coverage: 18, gap: 71, status: "Critical" },
  { skill: "AI Agents", demand: 76, coverage: 8, gap: 68, status: "Critical" },
  { skill: "Data Engineering", demand: 73, coverage: 31, gap: 42, status: "High" },
]

export const courseGapTable = [
  { skill: "Generative AI", demand: 89, coverage: 18, gap: 71, recommendation: "Create New Course" },
  { skill: "AI Agents", demand: 76, coverage: 8, gap: 68, recommendation: "Create New Course" },
  { skill: "Cloud Computing", demand: 82, coverage: 46, gap: 36, recommendation: "Update Curriculum" },
  { skill: "Cybersecurity", demand: 79, coverage: 55, gap: 24, recommendation: "Expand Training" },
  { skill: "Data Engineering", demand: 73, coverage: 31, gap: 42, recommendation: "Create Specialized Course" },
]

export const generativeAIDetail = {
  demand: 89,
  coverage: 18,
  gap: 71,
  proficiency: 31,
  status: "CRITICAL",
  modules: ["LLM Fundamentals", "Prompt Engineering", "Retrieval-Augmented Generation", "AI Agents", "Responsible AI"],
  duration: "8 Weeks",
  target: "Final-year students and recent graduates",
}

export const mockCompaniesList = ["TechNova Solutions", "MahaTech Systems", "Pune Digital Labs", "Vidarbha Analytics", "Konkan CloudWorks"]


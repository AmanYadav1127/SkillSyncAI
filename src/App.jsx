import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import RoleSelection from './pages/RoleSelection'
import StudentDashboard from './pages/StudentDashboard'
import SkillGap from './pages/SkillGap'
import CourseRecommendations from './pages/CourseRecommendations'
import CompanyDashboard from './pages/CompanyDashboard'
import CompanyRequirements from './pages/CompanyRequirements'
import GovDashboard from './pages/GovDashboard'
import GovCourseGap from './pages/GovCourseGap'

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/roles" element={<RoleSelection/>}/>
        <Route path="/student" element={<StudentDashboard/>}/>
        <Route path="/student/skill-gap" element={<SkillGap/>}/>
        <Route path="/student/recommendations" element={<CourseRecommendations/>}/>
        <Route path="/company" element={<CompanyDashboard/>}/>
        <Route path="/company/requirements" element={<CompanyRequirements/>}/>
        <Route path="/government" element={<GovDashboard/>}/>
        <Route path="/government/course-gaps" element={<GovCourseGap/>}/>
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}

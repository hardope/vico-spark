import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AuthPage from './pages/AuthPage'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'

function App() {

	  return (
		<Router>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/auth" element={<AuthPage />} />
			</Routes>
		</Router>
	)
}

export default App

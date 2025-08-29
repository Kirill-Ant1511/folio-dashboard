import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashboardLayout } from '../components/layout/DashboardLayout'
import { Pages } from '../configs/routing.config'
import { Dashboard } from '../pages/Dashboard/Dashboard'
import { Home } from '../pages/Home/Home'

export function RouteProvider() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path={Pages.Home}
					element={<Home />}
				/>
				<Route element={<DashboardLayout />}>
					<Route
						path={Pages.Dashboard}
						element={<Dashboard />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

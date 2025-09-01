import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Pages } from '@/configs/routing.config'
import { Goals } from '@/pages/Dashboard/Goals/Goals'
import { Dashboard } from '@/pages/Dashboard/Main/Dashboard'
import { Home } from '@/pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
					<Route
						path={Pages.Goals}
						element={<Goals />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

import { Outlet } from 'react-router-dom'
import { DashboardSidebar } from '../ui/DashboardSidebar'

export function DashboardLayout() {
	return (
		<div className='flex min-w-screen'>
			<DashboardSidebar />
			<main className='w-full overflow-y-auto max-h-screen'>
				<Outlet />
			</main>
		</div>
	)
}

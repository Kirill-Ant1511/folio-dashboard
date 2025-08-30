import { Outlet } from 'react-router-dom'
import { DashboardSidebar } from '../ui/DashboardSidebar'
import { Header } from '../ui/Header'

export function DashboardLayout() {
	return (
		<div className='flex min-w-screen'>
			<DashboardSidebar />
			<main className='w-full overflow-y-auto max-h-screen bg-background p-10'>
				<Header title='Track your finance' />
				<Outlet />
			</main>
		</div>
	)
}

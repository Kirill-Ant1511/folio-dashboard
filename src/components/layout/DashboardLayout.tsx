import { DashboardSidebar } from '@/components/ui/DashboardSidebar'
import { Header } from '@/components/ui/Header'
import { MENU } from '@/constants/data/menu'
import { Outlet, useLocation } from 'react-router-dom'

export function DashboardLayout() {
	const { pathname } = useLocation()
	const headerTitle = MENU.find(item => item.path === pathname)?.title
	return (
		<div className='flex min-w-screen'>
			<DashboardSidebar />
			<main className='w-full overflow-y-auto max-h-screen bg-background p-7'>
				{headerTitle ? (
					<Header title={headerTitle} />
				) : (
					<Header title='Track your finance' />
				)}
				<Outlet />
			</main>
		</div>
	)
}

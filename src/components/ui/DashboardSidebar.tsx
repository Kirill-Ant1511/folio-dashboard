import cn from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import { MENU } from '../../constants/data/menu'

export function DashboardSidebar() {
	const { pathname } = useLocation()
	return (
		<div className='min-h-screen bg-sidebar-background text-sidebar-foreground flex flex-col items-center group w-15 hover:w-35 transition-all duration-200 p-1'>
			<img
				src='/folio-logo.svg'
				alt='Folio'
				className='w-12 mb-32 self-start'
			/>
			<nav className='flex flex-col gap-10 text-sidebar-foreground/50 items-center w-full'>
				{MENU.map(item => (
					<Link
						to={item.path}
						key={item.title}
						className={cn(
							'flex items-center justify-center gap-2 w-full',
							pathname === item.path && 'text-primary'
						)}
					>
						<item.icon size={28} />
						<p className='group-hover:opacity-100 transition-all w-0 group-hover:w-2/3 duration-150 opacity-0 text-xs'>
							{item.title}
						</p>
					</Link>
				))}
			</nav>
			<img
				src='/folio-logo.svg'
				alt='Folio'
				className='w-12 absolute bottom-2 self-start'
			/>
		</div>
	)
}

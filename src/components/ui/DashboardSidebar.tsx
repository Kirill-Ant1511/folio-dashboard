import { MENU } from '@/constants/data/menu'
import { profiles } from '@/data/mock/Profiles.mock'
import cn from 'clsx'
import { Link, useLocation } from 'react-router-dom'

export function DashboardSidebar() {
	const { pathname } = useLocation()
	const profile = profiles[0]
	return (
		<div className='min-h-screen bg-sidebar-background text-sidebar-foreground flex flex-col items-center justify-between group w-15 hover:w-35 transition-all duration-200 px-1 py-2 max-h-screen'>
			<div className='w-full'>
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
			</div>
			<div className='flex items-center justify-center gap-2 cursor-pointer w-full'>
				<img
					src={profile.avatar}
					alt={profile.name}
					className='w-11.5 rounded-xl self-center'
				/>
				<p className='group-hover:opacity-100 transition-all w-0 group-hover:w-2/3 duration-150 opacity-0 text-xs line-clamp-1'>
					{profile.name}
				</p>
			</div>
		</div>
	)
}

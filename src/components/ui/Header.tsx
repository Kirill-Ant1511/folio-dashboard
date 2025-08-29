import { GoBell } from 'react-icons/go'
import { LuCalendar1 } from 'react-icons/lu'
import { SearchField } from '../elements/SearchField'

interface Props {
	title: string
}

export function Header({ title }: Props) {
	return (
		<div className='flex items-center justify-between w-full mb-10'>
			<h1 className='text-3xl font-bold text-foreground'>{title}</h1>
			<div className='flex items-center gap-3'>
				<SearchField placeholder='Search' />
				<button className='bg-transparent rounded-xl border-1 border-foreground/40 p-3 hover:bg-foreground/10 transition-all duration-200'>
					<GoBell size={25} />
				</button>
				<button className='bg-transparent rounded-xl border-1 border-foreground/40 p-3 hover:bg-foreground/10 transition-all duration-200'>
					<LuCalendar1 size={25} />
				</button>
			</div>
		</div>
	)
}

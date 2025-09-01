import { goals } from '@/data/mock/Goal.mock'
import { LuPlus } from 'react-icons/lu'
import { GoalsCard } from './GoalsCard'

export function Goals() {
	return (
		<div className='flex flex-col gap-4'>
			<button className='bg-transparent rounded-xl border-1 border-foreground/40 p-3 hover:bg-foreground/10 transition-all duration-200 flex items-center justify-center group gap-2'>
				<span>New Goal</span>
				<LuPlus
					size={20}
					className='group-hover:rotate-180 transition-all duration-500'
				/>
			</button>

			<div className='grid grid-cols-4'>
				<GoalsCard goal={goals[0]} />
			</div>
		</div>
	)
}

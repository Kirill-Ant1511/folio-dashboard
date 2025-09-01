import { ProgressBar } from '@/components/elements/ProgressBar'
import type { Goal } from '@/types/goal.type'

interface Props {
	goal: Goal
}

export function GoalsCard({ goal }: Props) {
	return (
		<div className='p-3 flex flex-col items-center justify-center gap-4 rounded-xl bg-transparent border-1 border-foreground/40 hover:bg-foreground/10 transition-all duration-200 cursor-pointer'>
			<div className='flex items-center justify-between w-full'>
				<div className='bg-primary/50 rounded-xl p-2 flex items-center justify-center'>
					<goal.icon />
				</div>
				<h2>{goal.name}</h2>
				<p>{goal.goalValue}$</p>
			</div>
			<div className='w-full h-0.5 bg-foreground/20' />
			<ProgressBar
				progress={goal.progress}
				goal={goal.goalValue}
			/>
			<div className='flex items-center justify-between w-full text-foreground/60'>
				<p>
					Start:{' '}
					{goal.createdAt.toLocaleDateString([], {
						day: '2-digit',
						month: '2-digit',
						year: 'numeric'
					})}
				</p>
				<p>
					End:{' '}
					{goal.deadline.toLocaleDateString([], {
						day: '2-digit',
						month: '2-digit',
						year: 'numeric'
					})}
				</p>
			</div>
		</div>
	)
}

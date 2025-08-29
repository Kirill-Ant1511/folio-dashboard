import cn from 'clsx'
import type { IconType } from 'react-icons'

interface Props {
	icon: IconType
	title: string
	value: string
	color: string
}

export function StatisticCard(props: Props) {
	return (
		<div className='flex items-center gap-4'>
			<div className={cn('p-3 rounded-xl bg-white', props.color)}>
				<props.icon size={40} />
			</div>
			<div>
				<h3 className='text-foreground/50 text-xl'>{props.title}</h3>
				<p className='text-2xl font-medium text-foreground'>${props.value}</p>
			</div>
		</div>
	)
}

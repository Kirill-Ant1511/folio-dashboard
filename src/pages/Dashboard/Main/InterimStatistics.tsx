import { PiChartLineDownFill, PiChartLineUpFill } from 'react-icons/pi'
import { TiStarFullOutline } from 'react-icons/ti'
import { StatisticCard } from './StatisticCard'

export function InterimStatistics() {
	return (
		<div className='flex items-center justify-around w-full'>
			<StatisticCard
				icon={PiChartLineUpFill}
				title='Total Earnings'
				value='74,892'
				color='text-primary'
			/>
			<StatisticCard
				icon={PiChartLineDownFill}
				title='Total Spending'
				value='9,739'
				color='text-[#E08EC5]'
			/>
			<StatisticCard
				icon={TiStarFullOutline}
				title='Monthly Goal'
				value='80,000'
				color='text-secondary'
			/>
		</div>
	)
}

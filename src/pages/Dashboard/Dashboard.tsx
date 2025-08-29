import { ChartStatistics } from '../../components/elements/ChartStatistics'
import { Header } from '../../components/ui/Header'
import { InterimStatistics } from './InterimStatistics'

export function Dashboard() {
	return (
		<div className='p-10 bg-background min-h-screen flex flex-col gap-10 items-center'>
			<Header title='Track your finance' />
			<InterimStatistics />
			<div className='w-full'>
				<ChartStatistics />
			</div>
		</div>
	)
}

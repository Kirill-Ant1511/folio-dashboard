import { ChartStatistics } from '../../components/elements/ChartStatistics'
import { Transaction } from '../../components/elements/Transaction'
import { Transfer } from '../../components/elements/Transfer'
import { Header } from '../../components/ui/Header'
import { InterimStatistics } from './InterimStatistics'

export function Dashboard() {
	return (
		<div className='p-10 bg-background min-h-screen flex flex-col gap-10 items-center'>
			<Header title='Track your finance' />
			<InterimStatistics />
			<div className='w-full flex gap-10'>
				<ChartStatistics />
				<Transfer />
			</div>
			<Transaction />
		</div>
	)
}

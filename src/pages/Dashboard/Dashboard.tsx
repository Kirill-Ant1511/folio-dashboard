import { ChartStatistics } from '../../components/elements/ChartStatistics'
import { Transaction } from '../../components/elements/Transaction'
import { Transfer } from '../../components/elements/Transfer'
import { InterimStatistics } from './InterimStatistics'

export function Dashboard() {
	return (
		<div className='flex flex-col gap-7 items-center'>
			<InterimStatistics />
			<div className='w-full flex gap-10'>
				<ChartStatistics />
				<Transfer />
			</div>
			<Transaction />
		</div>
	)
}

import { useState } from 'react'
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	XAxis,
	YAxis
} from 'recharts'

import { dataEarnings } from '../../data/mock/Chart.mock'
import { FilterSelect } from './FilterSelect'

export function ChartStatistics() {
	const [filter, setFilter] = useState('Earnings/Spending')

	return (
		<div className='w-full flex flex-col gap-7 items-end'>
			<FilterSelect
				filter={filter}
				setFilter={setFilter}
				value={['Earnings', 'Spending', 'Earnings/Spending']}
			/>

			<ResponsiveContainer
				width='100%'
				height={300}
			>
				<AreaChart
					width={100}
					height={300}
					data={dataEarnings}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='month' />
					<YAxis />

					{filter === 'Earnings' ? (
						<Area
							type='bumpX'
							dataKey='earnings'
							stroke='#8884d8'
							fill='#8884d8'
						/>
					) : filter === 'Spending' ? (
						<Area
							type='bumpX'
							dataKey='spending'
							stroke='#f9b87a'
							fill='#f9b87a'
						/>
					) : (
						<>
							<Area
								type='bumpX'
								dataKey='earnings'
								stroke='#8884d8'
								fill='#8884d8'
							/>
							<Area
								type='bumpX'
								dataKey='spending'
								stroke='#f9b87a'
								fill='#f9b87a'
							/>
						</>
					)}
				</AreaChart>
			</ResponsiveContainer>
		</div>
	)
}

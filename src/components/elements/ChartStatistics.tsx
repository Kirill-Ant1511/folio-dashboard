import { useState } from 'react'
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from 'recharts'

import { dataEarnings } from '../../data/mock/Chart.mock'
import { FilterSelect } from './FilterSelect'
import { CustomTooltip } from './Tooltips/CustomTooltip'
import { EarningsTooltip } from './Tooltips/EarningsTooltip'
import { SpendingTooltip } from './Tooltips/SpendingTooltip'

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
					<defs>
						<linearGradient
							id='linearColor'
							x1={0}
							y1={0}
							x2={0}
							y2={1.5}
						>
							<stop
								offset='20%'
								stopColor='#8884d8'
								stopOpacity={0.8}
							/>
							<stop
								offset='80%'
								stopColor='#8884d8'
								stopOpacity={0}
							/>
						</linearGradient>
						<linearGradient
							id='linearColor2'
							x1={0}
							y1={0}
							x2={0}
							y2={1.5}
						>
							<stop
								offset='20%'
								stopColor='#f9b87a'
								stopOpacity={0.8}
							/>
							<stop
								offset='80%'
								stopColor='#f9b87a'
								stopOpacity={0}
							/>
						</linearGradient>
					</defs>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis
						dataKey='month'
						axisLine={false}
					/>
					<YAxis
						axisLine={false}
						tickLine={false}
						tick={false}
					/>

					{filter === 'Earnings' ? (
						<>
							<Area
								type='bumpX'
								dataKey='earnings'
								stroke='#8884d8'
								fill='url(#linearColor)'
							/>
							<Tooltip content={<EarningsTooltip />} />
						</>
					) : filter === 'Spending' ? (
						<>
							<Area
								type='bumpX'
								dataKey='spending'
								stroke='#f9b87a'
								fill='url(#linearColor2)'
							/>
							<Tooltip content={<SpendingTooltip />} />
						</>
					) : (
						<>
							<Area
								type='bump'
								dataKey='earnings'
								stroke='#8884d8'
								fill='url(#linearColor)'
							/>
							<Area
								type='bump'
								dataKey='spending'
								stroke='#f9b87a'
								fill='url(#linearColor2)'
							/>
							<Tooltip content={<CustomTooltip />} />
						</>
					)}
				</AreaChart>
			</ResponsiveContainer>
		</div>
	)
}

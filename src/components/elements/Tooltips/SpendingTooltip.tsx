export function SpendingTooltip({ active, payload }: any) {
	if (!active || !payload || payload.length === 0) {
		return null
	}
	return (
		<div className='p-2 bg-secondary text-white rounded-xl flex flex-col gap-2'>
			<span>Spending: {payload[0].payload.spending}$</span>
		</div>
	)
}

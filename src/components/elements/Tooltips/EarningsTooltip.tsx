export function EarningsTooltip({ active, payload }: any) {
	if (!active || !payload || payload.length === 0) {
		return null
	}
	return (
		<div className='p-2 bg-primary text-white rounded-xl flex flex-col gap-2'>
			<span>Earnings: {payload[0].payload.earnings}$</span>
		</div>
	)
}

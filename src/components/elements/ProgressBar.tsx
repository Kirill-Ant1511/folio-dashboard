interface Props {
	progress: number
	goal: number
}
export function ProgressBar({ progress, goal }: Props) {
	const progressPercent = (progress / goal) * 100
	return (
		<div className='w-full h-10 rounded-xl border-2 bg-foreground/30 overflow-hidden'>
			<p
				style={{
					width: `${progressPercent}%`,
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
				className={progressPercent === 100 ? 'bg-green-400' : 'bg-primary'}
			>
				{progress}$
			</p>
		</div>
	)
}

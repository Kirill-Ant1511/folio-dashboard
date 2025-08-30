import cn from 'clsx'
import { useState } from 'react'

interface Props {
	filter: string
	setFilter: (filter: string) => void
	value: string[]
}

export function FilterSelect({ filter, setFilter, value }: Props) {
	const [isOpenSelect, setIsOpenSelect] = useState(false)
	return (
		<div className='relative flex flex-col items-center w-50'>
			<button
				onClick={() => setIsOpenSelect(!isOpenSelect)}
				className='p-2 rounded-xl bg-transparent border-1 border-foreground/10 hover:bg-foreground/5 transition-all duration-200 w-full'
			>
				{filter}
			</button>

			<div
				className={cn(
					'absolute z-10 bg-white rounded-xl  flex flex-col gap-2 top-full w-full text-sm transition-all duration-400',
					isOpenSelect
						? 'h-40 mt-2 opacity-100 p-3'
						: 'h-0 overflow-hidden mt-0 opacity-0 p-0'
				)}
			>
				{value.map(item => (
					<button
						onClick={() => {
							setFilter(item)
							setIsOpenSelect(false)
						}}
						className='w-full p-2 rounded-xl hover:bg-foreground/10 transition-all duration-200 bg-background'
					>
						{item}
					</button>
				))}
			</div>
		</div>
	)
}

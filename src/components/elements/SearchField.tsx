import { IoSearch } from 'react-icons/io5'

interface Props {
	placeholder: string
}

export function SearchField({ placeholder }: Props) {
	return (
		<div className='bg-foreground/10 rounded-xl flex items-center gap-4 p-3'>
			<IoSearch size={25} />
			<input
				type='text'
				placeholder={placeholder}
				className='focus:outline-none w-full bg-transparent'
			/>
		</div>
	)
}

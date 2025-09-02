import cn from 'clsx'

interface Props {
	placeholder?: string
	className?: string
	type?: string
	register?: any
	registerName?: string
}

export function Input({
	placeholder = 'Enter',
	className = '',
	type = 'text',
	register,
	registerName
}: Props) {
	if (register && registerName)
		return (
			<input
				{...register(registerName)}
				type={type}
				placeholder={placeholder}
				className={cn(
					'p-2 rounded-xl focus:outline-none border-1 border-foreground/40 bg-secondary/30 focus:bg-transparent w-full',
					className
				)}
			/>
		)
	else
		return (
			<input
				type={type}
				placeholder={placeholder}
				className={cn(
					'p-2 rounded-xl focus:outline-none border-1 border-foreground/40 bg-secondary/30 focus:bg-transparent',
					className
				)}
			/>
		)
}

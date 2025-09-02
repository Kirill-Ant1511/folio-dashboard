import { useForm, type FieldValues } from 'react-hook-form'
import { BiX } from 'react-icons/bi'
import { Input } from '../Input'

interface Props {
	onClose: () => void
}

export function CreateGoalModal({ onClose }: Props) {
	const { register, handleSubmit } = useForm()
	const onSubmit = (data: FieldValues) => {
		console.log(data)
	}
	return (
		<div className='fixed min-w-screen min-h-screen bg-foreground/50 flex items-center justify-center top-0 left-0'>
			<div className='p-3 bg-background rounded-xl w-1/3'>
				<div className='w-full flex justify-between items-center mb-5'>
					<h2>New Goal</h2>
					<button
						onClick={onClose}
						className='p-1 rounded-full hover:bg-secondary/50 transition-all duration-300'
					>
						<BiX size={25} />
					</button>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col items-center gap-3'
				>
					<Input
						register={register}
						registerName='title'
						placeholder='Goal name'
					/>
					<button
						type='submit'
						className='bg-primary rounded-xl p-2'
					>
						NEW
					</button>
				</form>
			</div>
		</div>
	)
}

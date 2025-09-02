import { CreateGoalModal } from '@/components/elements/Modals/CreateGoalModal'
import { goals } from '@/data/mock/Goal.mock'
import { useState } from 'react'
import { LuPlus } from 'react-icons/lu'
import { GoalsCard } from './GoalsCard'

export function Goals() {
	const [isOpenModal, setIsOpenModal] = useState(false)
	return (
		<div className='flex flex-col gap-4'>
			{isOpenModal && (
				<CreateGoalModal
					onClose={() => {
						setIsOpenModal(false)
					}}
				/>
			)}
			<button
				className='bg-transparent rounded-xl border-1 border-foreground/40 p-3 hover:bg-foreground/10 transition-all duration-200 flex items-center justify-center group gap-2'
				onClick={() => setIsOpenModal(true)}
			>
				<span>New Goal</span>
				<LuPlus
					size={20}
					className='group-hover:rotate-180 transition-all duration-500'
				/>
			</button>

			<div className='grid grid-cols-4 gap-5'>
				{goals.map(goal => (
					<GoalsCard goal={goal} />
				))}
			</div>
		</div>
	)
}

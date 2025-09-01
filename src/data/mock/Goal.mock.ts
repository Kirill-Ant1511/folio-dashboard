import type { Goal } from '@/types/goal.type'
import { FaTasks } from 'react-icons/fa'

export const goals: Goal[] = [
	{
		id: '1',
		icon: FaTasks,
		name: 'Goal 1',
		goalValue: 1000,
		createdAt: new Date(),
		deadline: new Date(),
		status: 'Not Started',
		progress: 400
	}
]

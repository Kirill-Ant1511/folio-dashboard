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
	},
	{
		id: '2',
		icon: FaTasks,
		name: 'Goal 2',
		goalValue: 2000,
		createdAt: new Date(),
		deadline: new Date(),
		status: 'Not Started',
		progress: 2000
	},
	{
		id: '3',
		icon: FaTasks,
		name: 'Goal 3',
		goalValue: 3000,
		createdAt: new Date(),
		deadline: new Date(),
		status: 'Not Started',
		progress: 1500
	},
	{
		id: '4',
		icon: FaTasks,
		name: 'Goal 4',
		goalValue: 4000,
		createdAt: new Date(),
		deadline: new Date(),
		status: 'Not Started',
		progress: 3700
	}
]

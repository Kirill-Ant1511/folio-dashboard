import type { Profile } from '../../types/profile.type'

export const profiles: Profile[] = [
	{
		id: '1',
		name: 'John Doe',
		username: 'johndoe',
		avatar: 'https://i.pravatar.cc/150?u=1',
		transfers: [
			{
				id: '1',
				amount: 100,
				createdAt: new Date('2022-01-01'),
				whoSendsId: '2'
			},
			{
				id: '2',
				amount: 200,
				createdAt: new Date('2022-01-02'),
				whoSendsId: '3'
			},
			{
				id: '3',
				amount: 300,
				createdAt: new Date('2022-01-03'),
				whoSendsId: '4'
			}
		],
		transactions: [
			{
				id: '65486936759',
				name: 'Salary',
				amount: 3654,
				createdAt: new Date('2025-08-29'),
				type: 'Payload'
			},
			{
				id: '65486931234',
				name: 'Groceries',
				amount: 1234,
				createdAt: new Date('2025-05-27'),
				type: 'Canceled'
			},
			{
				id: '65486936745',
				name: 'Car',
				amount: 4321,
				createdAt: new Date('2025-05-26'),
				type: 'Completed'
			}
		]
	},
	{
		id: '2',
		name: 'Jane Doe',
		username: 'janedoe',
		avatar: 'https://i.pravatar.cc/150?u=2',
		transfers: [],
		transactions: []
	},
	{
		id: '3',
		name: 'John Doe',
		username: 'johndoe',
		avatar: 'https://i.pravatar.cc/150?u=3',
		transfers: [],
		transactions: []
	},
	{
		id: '4',
		name: 'John Doe',
		username: 'johndoe',
		avatar: 'https://i.pravatar.cc/150?u=5',
		transfers: [],
		transactions: []
	}
]

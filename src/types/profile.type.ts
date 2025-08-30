import type { Transaction } from './transaction.type'
import type { Transfer } from './transfer.type'

export interface Profile {
	id: string
	name: string
	username: string
	avatar: string
	transfers: Transfer[]
	transactions: Transaction[]
}

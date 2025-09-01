import type { IconType } from 'react-icons'
import type { Status } from './status.type'

export interface Goal {
	id: string
	icon: IconType
	name: string
	goalValue: number
	createdAt: Date
	deadline: Date
	status: Status
	progress: number
}

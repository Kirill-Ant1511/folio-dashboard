import { Pages } from '@/configs/routing.config'
import type { IMenu } from '@/types/Menu'
import { FaTasks } from 'react-icons/fa'
import { FaChartPie } from 'react-icons/fa6'
import { HiUsers } from 'react-icons/hi'
import { LuSettings2 } from 'react-icons/lu'
import { MdSpaceDashboard } from 'react-icons/md'

export const MENU: IMenu[] = [
	{
		title: 'Dashboard',
		icon: MdSpaceDashboard,
		path: Pages.Dashboard
	},
	{
		title: 'Goals',
		icon: FaTasks,
		path: Pages.Dashboard
	},
	{
		title: 'Statistics',
		icon: FaChartPie,
		path: Pages.Dashboard
	},
	{
		title: 'Users',
		icon: HiUsers,
		path: Pages.Dashboard
	},
	{
		title: 'Settings',
		icon: LuSettings2,
		path: Pages.Dashboard
	}
]

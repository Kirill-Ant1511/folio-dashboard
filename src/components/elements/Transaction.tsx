import { BsThreeDots } from 'react-icons/bs'
import { IoIosSend } from 'react-icons/io'
import { profiles } from '../../data/mock/Profiles.mock'

export function Transaction() {
	const profile = profiles[0]
	return (
		<div className='w-full'>
			<h1 className='text-2xl font-semibold mb-5'>Transaction</h1>
			<div className='flex flex-col items-center gap-2 w-full'>
				{profile.transactions.map(item => (
					<div
						key={item.id}
						className='w-full grid grid-cols-[1fr_1fr_1fr_1fr_1fr_0.25fr] items-center hover:bg-white rounded-xl p-3 transition-all duration-200'
					>
						<div className='flex items-center gap-2'>
							<div className='bg-primary text-white p-2 rounded-xl flex items-center justify-center'>
								<IoIosSend size={28} />
							</div>
							<p className='font-medium'>{item.name}</p>
						</div>
						<p>
							{item.createdAt.toLocaleDateString([], {
								month: 'short',
								day: 'numeric',
								year: 'numeric'
							})}
						</p>
						<p>#{item.id}</p>
						<p>{item.type}</p>
						<p>${item.amount}</p>
						<BsThreeDots
							size={28}
							className='cursor-pointer hover:text-primary transition-all duration-200 w-full'
						/>
					</div>
				))}
			</div>
		</div>
	)
}

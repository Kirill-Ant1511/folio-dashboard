import { profiles } from '../../data/mock/Profiles.mock'

export function Transfer() {
	const profile = profiles[0]
	return (
		<div className='w-[30%]'>
			<h1 className='text-2xl font-bold mb-5'>Transfers</h1>
			<div className='flex flex-col gap-4'>
				{profile.transfers.map(transfer => {
					const whoSend = profiles.find(
						profile => profile.id === transfer.whoSendsId
					)
					if (whoSend)
						return (
							<div
								key={transfer.id}
								className='flex items-center gap-4 bg-white p-3 rounded-xl justify-between'
							>
								<div className='flex gap-4 items-center'>
									<img
										src={whoSend.avatar}
										alt={whoSend.name}
										className='w-12 h-12 rounded-xl'
									/>
									<div>
										<p>{whoSend.name}</p>
										<p className='lowercase text-sm text-foreground/50'>
											{transfer.createdAt.toLocaleTimeString([], {
												hour: '2-digit',
												minute: '2-digit'
											})}
										</p>
									</div>
								</div>
								<p className='font-medium'>+${transfer.amount}</p>
							</div>
						)
				})}
			</div>
		</div>
	)
}

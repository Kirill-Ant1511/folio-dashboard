import { Link } from 'react-router-dom'
import { Pages } from '../../configs/routing.config'

export function Home() {
	return (
		<div>
			Home Page
			<Link to={Pages.Dashboard}>Go to Dashboard</Link>
		</div>
	)
}

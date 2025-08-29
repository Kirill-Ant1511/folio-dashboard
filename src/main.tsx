import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouteProvider } from './providers/RouteProvider.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouteProvider />
	</StrictMode>
)

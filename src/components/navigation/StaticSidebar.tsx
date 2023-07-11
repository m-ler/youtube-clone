'use client'

import { Drawer } from '@mui/material'
import { navigationSidebarsState } from '@/store/navigationSideBars'
import MainNavigation from './MainNavigation'

const StaticSidebar = () => {
	const { collapsed } = navigationSidebarsState((state) => state)

	return (
		<Drawer
			open
			hideBackdrop
			elevation={0}
			variant="permanent"
			sx={{
				display: { xs: 'none', lg: collapsed ? 'none' : 'block' },
				'&>div': { top: '60px', bottom: 0, borderRight: 'none', width: 236, overflow: 'hidden' },
				'& .MuiBox-root': { mb: '60px' },
			}}
		>
			<MainNavigation />
		</Drawer>
	)
}

export default StaticSidebar

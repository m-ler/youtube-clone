'use client'

import { navigationSidebarsState } from '@/store/navigationSideBars'
import { Box } from '@mui/material'
import { PropsWithChildren } from 'react'

const MainLayout = ({ children }: PropsWithChildren) => {
	const { collapsed } = navigationSidebarsState((state) => state)

	return (
		<Box pt={2} ml={{ xs: 0, sm: '100px', lg: collapsed ? '100px' : '240px' }}>
			{children}
		</Box>
	)
}

export default MainLayout

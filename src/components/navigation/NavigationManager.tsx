'use client'

import { Theme, useMediaQuery } from '@mui/material'
import FloatingSidebar from './FloatingSidebar'
import StaticSidebar from './StaticSidebar'
import { useEffect } from 'react'
import { navigationSidebarsState } from '@/store/navigationSideBars'
import CollapsedSidebar from './CollapsedSidebar'

const NavigationManager = () => {
	const smallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
	const { setFloating } = navigationSidebarsState((state) => state)

	useEffect(() => {
		if (!smallScreen) {
			setFloating(false)
		}
	}, [smallScreen])

	return (
		<>
			<StaticSidebar />
			<CollapsedSidebar />
			<FloatingSidebar />
		</>
	)
}

export default NavigationManager

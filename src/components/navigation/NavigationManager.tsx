'use client'

import { Theme, useMediaQuery } from '@mui/material'
import FloatingSidebar from './FloatingSidebar'
import StaticSidebar from './StaticSidebar'
import { useEffect } from 'react'
import { navigationSidebarsState } from '@/store/navigationSideBars'
import CollapsedSidebar from './CollapsedSidebar'

type Props = {
	floatingOnly?: boolean
}

const NavigationManager = ({ floatingOnly }: Props) => {
	const smallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
	const { setFloating, setFloatingOnly } = navigationSidebarsState((state) => state)

	useEffect(() => {
		if (!smallScreen) {
			setFloating(false)
		}
	}, [smallScreen])

	useEffect(() => {
		setFloatingOnly(Boolean(floatingOnly))
	}, [floatingOnly])

	return (
		<>
			<FloatingSidebar />
			{!floatingOnly && (
				<>
					<StaticSidebar />
					<CollapsedSidebar />
				</>
			)}
		</>
	)
}

export default NavigationManager

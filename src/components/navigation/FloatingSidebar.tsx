'use client'

import { Drawer, Stack } from '@mui/material'
import Image from 'next/image'
import NavMenuButton from '../NavMenuButton'
import { navigationSidebarsState } from '@/store/navigationSideBars'
import MainNavigation from './MainNavigation'

const FloatingSidebar = () => {
	const { floating, setFloating } = navigationSidebarsState((state) => state)

	const onClose = () => {
		setFloating(false)
	}

	return (
		<Drawer
			open={floating}
			onClose={onClose}
			elevation={0}
			sx={{
				overflow: 'hidden',
				display: { xs: 'block', lg: 'none' },
				'&>div': { pr: 0.5 },
			}}
		>
			<Stack maxWidth={236} role="presentation" maxHeight="100%" pt={1} pb={0.5} overflow="hidden">
				<Stack direction="row" alignItems="center" px={2} pb={1}>
					<NavMenuButton />
					<Image src="/img/logo.svg" alt="YouTube logo" width={90} height={20} />
				</Stack>
				<MainNavigation />
			</Stack>
		</Drawer>
	)
}

export default FloatingSidebar

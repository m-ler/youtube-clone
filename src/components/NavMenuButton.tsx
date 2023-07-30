'use client'
import { navigationSidebarsState } from '@/store/navigationSideBars'
import { Menu } from '@mui/icons-material'
import { IconButton, Theme, useMediaQuery } from '@mui/material'

const NavMenuButton = () => {
	const { collapsed, floating, setFloating, setCollapsed, floatingOnly } = navigationSidebarsState((state) => state)
	const smallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

	const onClick = () => {
		if (smallScreen || floatingOnly) {
			setFloating(!floating)
			return
		}
		setCollapsed(!collapsed)
	}

	return (
		<IconButton size="medium" color="default" aria-label="menu" sx={{ mr: 2 }} onClick={onClick}>
			<Menu />
		</IconButton>
	)
}

export default NavMenuButton

'use client'

import { Box, Drawer, List } from '@mui/material'
import NavItem from './NavItem'
import { collapsedNavigation } from '@/config/siteNavigation'
import { navigationSidebarsState } from '@/store/navigationSideBars'

const CollapsedSidebar = () => {
	const { collapsed } = navigationSidebarsState((state) => state)

	return (
		<Drawer
			open
			hideBackdrop
			elevation={0}
			variant="permanent"
			sx={{
				display: { xs: 'none', sm: 'block', lg: collapsed ? 'block' : 'none' },
				'&>div': { top: '60px', bottom: 0, borderRight: 'none', width: 80, overflow: 'hidden' },
			}}
		>
			<Box
				overflow="hidden"
				mb="60px"
				role="presentation"
				sx={{
					scrollbarGutter: 'stable',
					'&:hover': {
						overflow: 'auto',
					},
					'& > .MuiList-root': {
						px: 0.5,
					},
					'& .MuiListItemIcon-root': {
						minWidth: '24px',
					},

					'& .MuiListItem-root > .MuiButtonBase-root ': {
						px: 1.5,
						py: 1.7,
						borderRadius: '12px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						'&.Mui-selected': {
							bgcolor: 'transparent',
							'& .MuiListItemText-primary': {
								fontWeight: '600',
							},
						},
						'& .MuiTypography-root ': {
							fontSize: 10,
						},
					},
				}}
			>
				<List>
					{collapsedNavigation.map((x) => (
						<NavItem item={x} key={x.name} />
					))}
				</List>
			</Box>
		</Drawer>
	)
}

export default CollapsedSidebar

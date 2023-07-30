import { Box, Divider, List, Typography } from '@mui/material'
import NavItem from './NavItem'
import { useCallback } from 'react'
import { NavItem as NavItemT } from '@/types'
import Footer from './Footer'
import { mainNavigation } from '@/config/siteNavigation'

const MainNavigation = () => {
	const getNavList = useCallback(
		(items: NavItemT[]) => (
			<List>
				{items.map((x) => (
					<NavItem item={x} key={x.name} />
				))}
			</List>
		),
		[]
	)

	return (
		<Box
			role="presentation"
			overflow="auto"
			sx={{
				scrollbarGutter: 'stable',
				'&:not(:hover)::-webkit-scrollbar-thumb ': {
					background: 'transparent',
				},
				'& > .MuiList-root': {
					px: 1.5,
				},
				'& .MuiListItemIcon-root': {
					minWidth: '48px',
				},

				'& .MuiListItem-root > .MuiButtonBase-root ': {
					px: 1.5,
					py: 0.75,
					borderRadius: '12px',
					'&.Mui-selected': {
						bgcolor: 'action.hover',
						'& .MuiListItemText-primary': {
							fontWeight: '600',
						},
					},
					'& .MuiTypography-root ': {
						fontSize: 14,
					},
				},
			}}
		>
			{getNavList(mainNavigation.main)}
			<Divider sx={{ mr: 0.75 }} />
			{getNavList(mainNavigation.user)}
			<Divider sx={{ mr: 0.75 }} />
			<Typography fontSize={16} lineHeight="16px" px={3} mt={2.5} fontWeight="semibold">
				Explore
			</Typography>
			{getNavList(mainNavigation.explore)}
			<Divider sx={{ mr: 0.75 }} />
			{getNavList(mainNavigation.browse)}
			<Divider sx={{ mr: 0.75 }} />
			<Typography fontSize={16} lineHeight="16px" px={3} mt={2.5} fontWeight="semibold">
				More from YouTube
			</Typography>
			{getNavList(mainNavigation.more)}
			<Divider sx={{ mr: 0.75 }} />
			{getNavList(mainNavigation.support)}
			<Divider sx={{ mr: 0.75 }} />
			<Footer />
		</Box>
	)
}

export default MainNavigation

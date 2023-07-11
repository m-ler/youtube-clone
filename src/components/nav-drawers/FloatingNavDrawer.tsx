'use client'

import { Box, Divider, Drawer, List, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import NavItem from './NavItem'
import { useCallback } from 'react'
import { NavItem as NavItemT } from '@/types'
import Footer from './Footer'
import { mainNavigation } from '@/config/siteNavigation'
import Image from 'next/image'
import NavMenuButton from '../NavMenuButton'

const FloatingNavDrawer = () => {
	const onClose = () => {
		//
	}

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
		<Drawer
			open
			onClose={onClose}
			elevation={0}
			sx={{
				overflow: 'hidden',
				'&>div': { pr: 0.5 },
			}}
		>
			<Stack maxWidth={236} role="presentation" maxHeight="100%" pt={1} pb={0.5} overflow="hidden">
				<Stack direction="row" alignItems="center" px={2} pb={1}>
					<NavMenuButton />
					<Image src="/img/logo.svg" alt="YouTube logo" width={90} height={20} />
				</Stack>
				<Box
					overflow="hidden"
					sx={{
						scrollbarGutter: 'stable',
						'&:hover': {
							overflow: 'auto',
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
								bgcolor: grey[100],
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
			</Stack>
		</Drawer>
	)
}

export default FloatingNavDrawer

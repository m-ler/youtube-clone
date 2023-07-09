'use client';

import { Inbox, Mail } from '@mui/icons-material';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import NavItem from './NavItem';
import { useCallback } from 'react';
import { NavItem as NavItemT } from '@/types';
import Footer from './Footer';
import { mainNavigation } from '@/config/siteNavigation';

const NavDrawer = () => {
	const onClose = () => {
		//
	};

	const getNavList = useCallback(
		(items: NavItemT[]) => (
			<List>
				{items.map(x => (
					<NavItem item={x} key={x.name} />
				))}
			</List>
		),
		[]
	);

	return (
		<Drawer
			open
			onClose={onClose}
			hideBackdrop
			elevation={0}
			variant="permanent"
			sx={{ '&>div': { top: '60px', bottom: 0, borderRight: 'none', width: 236, overflow: 'hidden' } }}
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
		</Drawer>
	);
};

export default NavDrawer;

'use client';

import { Inbox, Mail } from '@mui/icons-material';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import NavItem from './NavItem';
import { useCallback } from 'react';
import { NavItem as NavItemT } from '@/types';
import Footer from './Footer';
import { collapsedNavigation, mainNavigation } from '@/config/siteNavigation';

const CollapsedNavDrawer = () => {
	const onClose = () => {
		//
	};

	return (
		<Drawer
			open
			onClose={onClose}
			hideBackdrop
			elevation={0}
			variant="permanent"
			sx={{
				display: { xs: 'block', lg: 'none' },
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
					{collapsedNavigation.map(x => (
						<NavItem item={x} key={x.name} />
					))}
				</List>
			</Box>
		</Drawer>
	);
};

export default CollapsedNavDrawer;

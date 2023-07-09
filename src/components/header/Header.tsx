'use client';

import { AccountCircleOutlined, Menu, MoreVert } from '@mui/icons-material';
import { AppBar, Button, IconButton, Toolbar, Tooltip } from '@mui/material';
import { grey } from '@mui/material/colors';
import Image from 'next/image';
import SearchBar from './SearchBar';

const Header = () => {
	return (
		<AppBar id="app-header" position="static" elevation={0} color="transparent" sx={{ '& .MuiToolbar-root': { minHeight: { xs: 56 } } }}>
			<Toolbar sx={{ '&.MuiToolbar-root': { px: 2 } }}>
				<IconButton size="medium" color="default" aria-label="menu" sx={{ mr: 2 }}>
					<Menu />
				</IconButton>
				<Image src="/img/logo.svg" width={90} height={20} alt="Youtube logo" priority />
				<SearchBar />
				<Tooltip title="Settings">
					<IconButton aria-label="settings menu" sx={{ mr: 1 }}>
						<MoreVert />
					</IconButton>
				</Tooltip>
				<Button variant="outlined" startIcon={<AccountCircleOutlined />} sx={{ borderRadius: 5, borderColor: grey[200] }}>
					Sign in
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Header;

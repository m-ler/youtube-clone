'use client'

import { AccountCircleOutlined, ArrowBackOutlined, Search } from '@mui/icons-material'
import { AppBar, Box, Button, IconButton, Theme, Toolbar, Tooltip, useMediaQuery, Link as MUILInk } from '@mui/material'
import SearchBar from './SearchBar'
import NavMenuButton from '../NavMenuButton'
import { useEffect, useState } from 'react'
import SettingsButton from './SettingsButton'
import YoutubeTextIcon from '@/assets/svgr/YoutubeTextIcon'
import Link from 'next/link'

const Header = () => {
	const [onlySearchBar, setOnlySearchBar] = useState(false)
	const tabletScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))

	useEffect(() => {
		if (tabletScreen) setOnlySearchBar(false)
	}, [tabletScreen])

	return (
		<AppBar
			id="app-header"
			position="sticky"
			elevation={0}
			color="transparent"
			sx={{ '& .MuiToolbar-root': { minHeight: { xs: 56 } }, bgcolor: 'background.default', overflow: 'hidden' }}
		>
			<Toolbar sx={{ '&.MuiToolbar-root': { px: 2 } }}>
				{onlySearchBar ? (
					<>
						<IconButton aria-label="settings menu" sx={{ mr: 1 }} onClick={() => setOnlySearchBar(false)}>
							<ArrowBackOutlined />
						</IconButton>
						<SearchBar />
					</>
				) : (
					<>
						<NavMenuButton />
						<MUILInk href="/" component={Link} sx={{ display: 'flex', '& > svg': { color: 'text.primary' } }}>
							<YoutubeTextIcon width={90} height={20} />
						</MUILInk>
						<Box display={{ xs: 'none', sm: 'inline' }} mx="auto" pl={2} maxWidth={640} width="100%">
							<SearchBar />
						</Box>

						<Tooltip title="Search">
							<IconButton
								aria-label="search"
								sx={{ ml: 'auto', display: { xs: 'inline-flex', sm: 'none' } }}
								onClick={() => setOnlySearchBar(true)}
							>
								<Search />
							</IconButton>
						</Tooltip>
						<SettingsButton />
						<Button
							variant="outlined"
							startIcon={<AccountCircleOutlined />}
							sx={{
								borderRadius: 5,
								borderColor: 'action.focus',
								color: 'info.main',
								whiteSpace: 'nowrap',
								overflow: 'hidden',
							}}
						>
							Sign in
						</Button>
					</>
				)}
			</Toolbar>
		</AppBar>
	)
}

export default Header

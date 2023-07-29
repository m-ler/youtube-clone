'use client'

import {
	AdminPanelSettingsOutlined,
	ArrowForwardIosOutlined,
	FeedbackOutlined,
	HelpOutlineOutlined,
	KeyboardAltOutlined,
	LanguageOutlined,
	ModeNightOutlined,
	MoreVert,
	SettingsOutlined,
	TranslateOutlined,
	VerifiedUserOutlined,
} from '@mui/icons-material'
import {
	Divider,
	IconButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	MenuList,
	Tooltip,
	Typography,
} from '@mui/material'
import { useState } from 'react'
import AppearanceMenu from './AppearanceMenu'

const SettingsButton = () => {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
	const [showAppearanceMenu, setShowAppearanceMenu] = useState(false)
	const closeMenu = () => setAnchorEl(null)

	return (
		<>
			<Tooltip title="Settings">
				<IconButton aria-label="settings menu" sx={{ mr: 1 }} onClick={(e) => setAnchorEl(e.currentTarget)}>
					<MoreVert />
				</IconButton>
			</Tooltip>
			<Menu
				elevation={2}
				id="basic-menu"
				anchorEl={anchorEl}
				open={Boolean(anchorEl) && !showAppearanceMenu}
				onClose={closeMenu}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				sx={{
					'& >.MuiPaper-root': { width: '300px ' },
					'& .MuiButtonBase-root > .MuiSvgIcon-root': { fontSize: 14 },
					'& .MuiButtonBase-root': { height: 40 },
				}}
			>
				<MenuList dense>
					<MenuItem>
						<ListItemIcon>
							<VerifiedUserOutlined fontSize="small" />
						</ListItemIcon>
						<ListItemText>Your data in Youtube</ListItemText>
					</MenuItem>

					<MenuItem onClick={() => setShowAppearanceMenu(true)}>
						<ListItemIcon>
							<ModeNightOutlined fontSize="small" />
						</ListItemIcon>
						<ListItemText>Appearence: Light</ListItemText>
						<ArrowForwardIosOutlined />
					</MenuItem>

					<MenuItem>
						<ListItemIcon>
							<TranslateOutlined fontSize="small" />
						</ListItemIcon>
						<ListItemText>Language: English</ListItemText>
						<ArrowForwardIosOutlined />
					</MenuItem>

					<MenuItem>
						<ListItemIcon>
							<AdminPanelSettingsOutlined fontSize="small" />
						</ListItemIcon>
						<ListItemText>Restricted Mode: off</ListItemText>
						<ArrowForwardIosOutlined />
					</MenuItem>

					<MenuItem>
						<ListItemIcon>
							<LanguageOutlined fontSize="small" />
						</ListItemIcon>
						<ListItemText>Location: United States</ListItemText>
						<ArrowForwardIosOutlined />
					</MenuItem>

					<MenuItem>
						<ListItemIcon>
							<KeyboardAltOutlined fontSize="small" />
						</ListItemIcon>
						<ListItemText>Keyboard shortcuts</ListItemText>
					</MenuItem>

					<Divider />

					<MenuItem>
						<ListItemIcon>
							<SettingsOutlined fontSize="small" />
						</ListItemIcon>
						<ListItemText>Settings</ListItemText>
					</MenuItem>

					<Divider />

					<MenuItem>
						<ListItemIcon>
							<HelpOutlineOutlined fontSize="small" />
						</ListItemIcon>
						<ListItemText>Help</ListItemText>
					</MenuItem>

					<MenuItem>
						<ListItemIcon>
							<FeedbackOutlined fontSize="small" />
						</ListItemIcon>
						<ListItemText>Send feedback</ListItemText>
					</MenuItem>
				</MenuList>
			</Menu>
			<AppearanceMenu
				open={showAppearanceMenu && Boolean(anchorEl)}
				anchorEl={anchorEl}
				onClose={() => {
					setShowAppearanceMenu(false)
				}}
			/>
		</>
	)
}

export default SettingsButton

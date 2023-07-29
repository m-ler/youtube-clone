import { colorModeState } from '@/store/colorMode'
import { Appearance } from '@/types'
import { ArrowBackOutlined, CheckOutlined } from '@mui/icons-material'
import { ListItemIcon, ListItemText, Menu, MenuItem, MenuList } from '@mui/material'

type Props = {
	open: boolean
	anchorEl: HTMLElement | null
	onClose: () => void
}

const AppearanceMenu = ({ open, anchorEl, onClose }: Props) => {
	const { value: colorMode, setColorMode } = colorModeState((state) => state)

	const toggleTheme = (appearance: Appearance) => {
		setColorMode(appearance)
		onClose()
	}

	return (
		<Menu
			elevation={2}
			id="basic-menu"
			anchorEl={anchorEl}
			open={open}
			onClose={onClose}
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
			<MenuItem onClick={onClose}>
				<ListItemIcon>
					<ArrowBackOutlined />
				</ListItemIcon>
				<ListItemText>Appearance</ListItemText>
			</MenuItem>
			<MenuList dense>
				<MenuItem onClick={() => toggleTheme('device')}>
					<ListItemIcon>{colorMode === 'device' ? <CheckOutlined fontSize="small" /> : <></>}</ListItemIcon>
					<ListItemText>Use device theme</ListItemText>
				</MenuItem>
				<MenuItem onClick={() => toggleTheme('dark')}>
					<ListItemIcon>{colorMode === 'dark' ? <CheckOutlined fontSize="small" /> : <></>}</ListItemIcon>
					<ListItemText>Dark theme</ListItemText>
				</MenuItem>
				<MenuItem onClick={() => toggleTheme('light')}>
					<ListItemIcon>{colorMode === 'light' ? <CheckOutlined fontSize="small" /> : <></>}</ListItemIcon>
					<ListItemText>Light theme</ListItemText>
				</MenuItem>
			</MenuList>
		</Menu>
	)
}

export default AppearanceMenu

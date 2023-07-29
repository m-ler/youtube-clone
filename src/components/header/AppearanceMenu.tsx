import { Appearance } from '@/types'
import { ArrowBackOutlined, CheckOutlined } from '@mui/icons-material'
import { ListItemIcon, ListItemText, Menu, MenuItem, MenuList } from '@mui/material'

type Props = {
	open: boolean
	anchorEl: HTMLElement | null
	onClose: () => void
}

const AppearanceMenu = ({ open, anchorEl, onClose }: Props) => {
	const toggleTheme = (appearance: Appearance) => {
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
					<ListItemIcon>
						<></>
					</ListItemIcon>
					<ListItemText>Use device theme</ListItemText>
				</MenuItem>
				<MenuItem onClick={() => toggleTheme('dark')}>
					<ListItemIcon>
						<></>
					</ListItemIcon>
					<ListItemText>Dark theme</ListItemText>
				</MenuItem>
				<MenuItem onClick={() => toggleTheme('light')}>
					<ListItemIcon>
						<CheckOutlined fontSize="small" />
					</ListItemIcon>
					<ListItemText>Light theme</ListItemText>
				</MenuItem>
			</MenuList>
		</Menu>
	)
}

export default AppearanceMenu

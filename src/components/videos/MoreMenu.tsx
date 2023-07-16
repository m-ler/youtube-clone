import {
	BlockOutlined,
	FileDownloadOutlined,
	FlagOutlined,
	PlaylistAddOutlined,
	PlaylistPlay,
	RemoveCircleOutlineOutlined,
	SendOutlined,
	WatchLaterOutlined,
} from '@mui/icons-material'
import { Divider, ListItemIcon, ListItemText, Menu, MenuItem, MenuList } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
	anchorEl: HTMLElement | null
	onClose: () => void
}

type MenuOption = {
	icon: ReactNode
	name: string
}

const menuItems: { primary: MenuOption[]; secondary: MenuOption[] } = {
	primary: [
		{
			icon: <PlaylistPlay fontSize="small" />,
			name: 'Add to queue',
		},
		{
			icon: <WatchLaterOutlined fontSize="small" />,
			name: 'Save to Watch later',
		},
		{
			icon: <PlaylistAddOutlined fontSize="small" />,
			name: 'Save to playlist',
		},
		{
			icon: <FileDownloadOutlined fontSize="small" />,
			name: 'Download',
		},
		{
			icon: <SendOutlined fontSize="small" />,
			name: 'Share',
		},
	],
	secondary: [
		{
			icon: <BlockOutlined fontSize="small" />,
			name: 'Not interested',
		},
		{
			icon: <RemoveCircleOutlineOutlined fontSize="small" />,
			name: "Don't recommend channel",
		},
		{
			icon: <FlagOutlined fontSize="small" />,
			name: 'Report',
		},
	],
}

const MoreMenu = ({ anchorEl, onClose }: Props) => {
	return (
		<Menu
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'left',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'left',
			}}
			open={Boolean(anchorEl)}
			anchorEl={anchorEl}
			onClose={onClose}
			sx={{
				'& .MuiListItemText-root>.MuiTypography-root': {
					fontSize: 14,
				},
			}}
		>
			<MenuList>
				{menuItems.primary.map((x) => (
					<MenuItem onClick={onClose} key={x.name}>
						<ListItemIcon>{x.icon}</ListItemIcon>
						<ListItemText>{x.name}</ListItemText>
					</MenuItem>
				))}

				<Divider />

				{menuItems.secondary.map((x) => (
					<MenuItem onClick={onClose} key={x.name}>
						<ListItemIcon>{x.icon}</ListItemIcon>
						<ListItemText>{x.name}</ListItemText>
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	)
}

export default MoreMenu

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

type Props = {
	anchorEl: HTMLElement | null
	onClose: () => void
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
				<MenuItem onClick={onClose}>
					<ListItemIcon>
						<PlaylistPlay fontSize="small" />
					</ListItemIcon>
					<ListItemText>Add to queue</ListItemText>
				</MenuItem>
				<MenuItem onClick={onClose}>
					<ListItemIcon>
						<WatchLaterOutlined fontSize="small" />
					</ListItemIcon>
					<ListItemText>Save to Watch later</ListItemText>
				</MenuItem>
				<MenuItem onClick={onClose}>
					<ListItemIcon>
						<PlaylistAddOutlined fontSize="small" />
					</ListItemIcon>
					<ListItemText>Save to playlist</ListItemText>
				</MenuItem>
				<MenuItem onClick={onClose}>
					<ListItemIcon>
						<FileDownloadOutlined fontSize="small" />
					</ListItemIcon>
					<ListItemText>Download</ListItemText>
				</MenuItem>
				<MenuItem onClick={onClose}>
					<ListItemIcon>
						<SendOutlined fontSize="small" />
					</ListItemIcon>
					<ListItemText>Share</ListItemText>
				</MenuItem>

				<Divider />
				<MenuItem onClick={onClose}>
					<ListItemIcon>
						<BlockOutlined fontSize="small" />
					</ListItemIcon>
					<ListItemText>Not interested</ListItemText>
				</MenuItem>
				<MenuItem onClick={onClose}>
					<ListItemIcon>
						<RemoveCircleOutlineOutlined fontSize="small" />
					</ListItemIcon>
					<ListItemText>Don&apos;t recommend channel</ListItemText>
				</MenuItem>
				<MenuItem onClick={onClose}>
					<ListItemIcon>
						<FlagOutlined fontSize="small" />
					</ListItemIcon>
					<ListItemText>Report</ListItemText>
				</MenuItem>
			</MenuList>
		</Menu>
	)
}

export default MoreMenu

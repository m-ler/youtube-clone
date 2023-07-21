import {
	ContentCutOutlined,
	DownloadOutlined,
	MoreHoriz,
	PlaylistAddOutlined,
	ShareOutlined,
} from '@mui/icons-material'
import { Chip, IconButton, Stack, Tooltip } from '@mui/material'
import LikeButtonGroup from './LikeButtonGroup'
import { grey } from '@mui/material/colors'

type Props = {
	likes: string
}

const ActionButtons = ({ likes }: Props) => {
	return (
		<Stack
			direction="row"
			spacing={1}
			alignItems="center"
			sx={{ '& .MuiChip-root': { px: 0.75, minHeight: 36 }, '& .MuiChip-label': { fontSize: 14 } }}
		>
			<LikeButtonGroup likes={likes} />
			<Tooltip title="Share">
				<Chip icon={<ShareOutlined fontSize="small" />} label="Share" onClick={() => false} />
			</Tooltip>
			<Tooltip title="Download">
				<Chip icon={<DownloadOutlined fontSize="small" />} label="Download" onClick={() => false} />
			</Tooltip>
			<Tooltip title="Clip">
				<Chip
					icon={<ContentCutOutlined fontSize="small" />}
					label="Clip"
					onClick={() => false}
					sx={{ display: { xs: 'none', md: 'flex' } }}
				/>
			</Tooltip>
			<Tooltip title="Save">
				<Chip
					icon={<PlaylistAddOutlined fontSize="small" />}
					label="Save"
					onClick={() => false}
					sx={{ display: { xs: 'none', md: 'flex' } }}
				/>
			</Tooltip>
			<IconButton sx={{ bgcolor: grey[200], p: 0.75, flexShrink: 0 }}>
				<MoreHoriz />
			</IconButton>
		</Stack>
	)
}

export default ActionButtons

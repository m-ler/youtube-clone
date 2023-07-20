import { stringAvatar, stringToColor } from '@/lib/utils/avatar'
import { getFormattedChannelData, getFormattedVideoData } from '@/lib/utils/youtube'
import {
	ContentCutOutlined,
	DownloadOutlined,
	PlaylistAddOutlined,
	ShareOutlined,
	ThumbDownOutlined,
	ThumbUpOutlined,
} from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Chip, Divider, Stack, Tooltip, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { youtube_v3 } from 'googleapis'
import { useMemo } from 'react'

type Props = {
	video: youtube_v3.Schema$Video
	channel: youtube_v3.Schema$Channel | null
}

const VideoMetadataCard = ({ video, channel }: Props) => {
	const { likes } = useMemo(() => getFormattedVideoData(video), [video?.id])
	const { channelName, subs } = useMemo(() => getFormattedChannelData(channel || {}), [channel?.id])

	return (
		<Stack overflow="hidden" maxWidth="100%" spacing={1.5}>
			<Typography
				variant="h1"
				fontSize={20}
				fontWeight="600"
				overflow="hidden"
				sx={{ WebkitBoxOrient: 'vertical', display: '-webkit-box', WebkitLineClamp: 2 }}
			>
				{video.snippet?.title}
			</Typography>
			<Box display="flex" alignItems="center" mt={1}>
				<Avatar src={channel?.snippet?.thumbnails?.default?.url || ''} sx={{ bgcolor: stringToColor(channelName) }}>
					{stringAvatar(channelName)}
				</Avatar>
				<Box ml={1.5} overflow="hidden">
					<Tooltip title={channelName} placement="top">
						<Typography
							maxWidth="100%"
							fontSize={16}
							fontWeight="600"
							lineHeight="22px"
							width="fit-content"
							whiteSpace="nowrap"
							textOverflow="ellipsis"
							overflow="hidden"
						>
							{channelName}
						</Typography>
					</Tooltip>
					<Typography
						fontSize={12}
						lineHeight="12px"
						color={grey[600]}
						whiteSpace="nowrap"
						textOverflow="ellipsis"
						overflow="hidden"
					>
						{subs}
					</Typography>
				</Box>
				<Stack direction="row" ml={3.5} spacing={1} mr={2}>
					<Button variant="outlined" sx={{ borderRadius: '18px' }}>
						Join
					</Button>
					<Button variant="contained" sx={{ borderRadius: '18px' }} disableElevation>
						Subscribe
					</Button>
				</Stack>
				<Stack
					ml="auto"
					direction="row"
					spacing={1}
					alignItems="center"
					sx={{ '& .MuiChip-root': { px: 0.75, minHeight: 36 }, '& .MuiChip-label': { fontSize: 14 } }}
				>
					<ButtonGroup
						disableElevation
						variant="outlined"
						sx={{
							minHeight: '36px',
							'& .MuiButtonBase-root': {
								'&:hover': {
									border: 'none',
								},
								border: 'none',
								color: grey[800],
								bgcolor: grey[200],
								'&:nth-of-type(1)': {
									borderRadius: '18px 0px 0px 18px',
								},
								'&:nth-of-type(2)': {
									borderRadius: '0px 18px 18px 0px',
								},
							},
						}}
					>
						<Tooltip title="I like this">
							<Button>
								<ThumbUpOutlined fontSize="small" />
								<Typography component="span" ml={1} fontSize={14} fontWeight="500">
									{likes}
								</Typography>
							</Button>
						</Tooltip>
						<Divider sx={{ width: '1px', backgroundColor: grey[400], my: '5%', zIndex: 1 }} />
						<Tooltip title="I dislike this">
							<Button>
								<ThumbDownOutlined fontSize="small" />
							</Button>
						</Tooltip>
					</ButtonGroup>

					<Tooltip title="Share">
						<Chip icon={<ShareOutlined fontSize="small" />} label="Share" onClick={() => false} />
					</Tooltip>
					<Tooltip title="Download">
						<Chip icon={<DownloadOutlined fontSize="small" />} label="Download" onClick={() => false} />
					</Tooltip>
					<Tooltip title="Clip">
						<Chip icon={<ContentCutOutlined fontSize="small" />} label="Clip" onClick={() => false} />
					</Tooltip>
					<Tooltip title="Save">
						<Chip icon={<PlaylistAddOutlined fontSize="small" />} label="Save" onClick={() => false} />
					</Tooltip>
				</Stack>
			</Box>
		</Stack>
	)
}

export default VideoMetadataCard

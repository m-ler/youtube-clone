import { stringAvatar, stringToColor } from '@/lib/utils/avatar'
import { Avatar, Box, Button, ButtonGroup, Grid, Stack, Tooltip, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { youtube_v3 } from 'googleapis'

const formatNumber = new Intl.NumberFormat('en', {
	notation: 'compact',
	compactDisplay: 'short',
	maximumSignificantDigits: 3,
}).format

type Props = {
	video: youtube_v3.Schema$Video
	channel: youtube_v3.Schema$Channel | null
}

const VideoMetadataCard = ({ video, channel }: Props) => {
	console.log(channel)
	const channelName = channel?.snippet?.title || ''
	const subsCount = channel?.statistics?.subscriberCount
	const subs =
		subsCount === '0'
			? 'No views'
			: `${formatNumber(parseInt(subsCount || '0'))} ${subsCount === '1' ? 'subscriber' : 'subscribers'}`

	return (
		<Grid container columns={{ xs: 1, sm: 2 }}>
			<Grid item xs={2}>
				<Typography variant="h1" fontSize={20} fontWeight="600">
					{video.snippet?.title}
				</Typography>
			</Grid>
			<Grid item xs={1}>
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
					<Stack direction="row" ml={3.5} spacing={1}>
						<Button variant="outlined" sx={{ borderRadius: '18px' }}>
							Join
						</Button>
						<Button variant="contained" sx={{ borderRadius: '18px' }} disableElevation>
							Subscribe
						</Button>
					</Stack>
					<Stack ml="auto">
						<ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons">
							<Button>One</Button>
							<Button>Two</Button>
						</ButtonGroup>
					</Stack>
				</Box>
			</Grid>
		</Grid>
	)
}

export default VideoMetadataCard

import { stringAvatar, stringToColor } from '@/lib/utils/avatar'
import { Avatar, Box, Stack, Tooltip, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { youtube_v3 } from 'googleapis'

type Props = {
	channel: youtube_v3.Schema$Channel | null
	channelName: string
	subs: string
	avatarSize?: number
}

const ChannelAvatar = ({ channel, channelName, subs, avatarSize }: Props) => {
	return (
		<Stack direction="row" alignItems="center">
			<Avatar
				src={channel?.snippet?.thumbnails?.default?.url || ''}
				sx={{ bgcolor: stringToColor(channelName), width: avatarSize || 40, height: avatarSize || 40 }}
				alt={channelName}
			>
				{stringAvatar(channelName)}
			</Avatar>
			<Box ml={1.5} overflow="hidden" pr={2}>
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
		</Stack>
	)
}

export default ChannelAvatar

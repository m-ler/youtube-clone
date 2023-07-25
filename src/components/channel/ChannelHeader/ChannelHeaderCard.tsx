'use client'

import { getFormattedChannelData } from '@/lib/utils/youtube'
import { KeyboardArrowRightOutlined } from '@mui/icons-material'
import { Avatar, Box, Typography } from '@mui/material'
import { youtube_v3 } from 'googleapis'

type Props = {
	channel: youtube_v3.Schema$Channel
}

const ChannelHeaderCard = ({ channel }: Props) => {
	const { channelName, subs, videos } = getFormattedChannelData(channel)

	return (
		<Box display="flex" flexDirection="row" mb={2}>
			<Avatar
				alt={channelName}
				src={channel.snippet?.thumbnails?.high?.url || ''}
				sx={{ width: '128px', height: '128px', display: { xs: 'none', sm: 'flex' } }}
			></Avatar>
			<Box display="flex" flexDirection="column" justifyContent="center" ml={2.5}>
				<Typography component="h1" fontSize={24}>
					{channelName}
				</Typography>
				<Typography fontSize={14}>
					{channel.snippet?.customUrl}
					<Typography component="span" fontSize={14} ml={1} color="text.secondary">
						{subs}
					</Typography>
					<Typography component="span" fontSize={14} ml={1} color="text.secondary">
						{videos}
					</Typography>
				</Typography>
				<Box display="flex" alignItems="center" mt={1}>
					<Typography
						fontSize={14}
						color="text.secondary"
						display="flex"
						alignItems="center"
						maxWidth="286px"
						mr={1}
						sx={{
							overflow: 'hidden',
							WebkitBoxOrient: 'vertical',
							display: '-webkit-box',
							WebkitLineClamp: 1,
							textDecoration: 'none',
						}}
					>
						{channel.snippet?.description || 'More about this channel'}
					</Typography>
					<KeyboardArrowRightOutlined />
				</Box>
			</Box>
		</Box>
	)
}

export default ChannelHeaderCard

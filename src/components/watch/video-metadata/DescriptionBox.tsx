'use client'

import { Box, Button, Divider, Stack, Typography, alpha } from '@mui/material'
import { grey } from '@mui/material/colors'
import { youtube_v3 } from 'googleapis'
import ChannelAvatar from './ChannelAvatar'
import { PortraitOutlined, SlideshowOutlined } from '@mui/icons-material'
import moment from 'moment'
import { useState } from 'react'

type Props = {
	video: youtube_v3.Schema$Video
	channel: youtube_v3.Schema$Channel | null
	subs: string
	timeAgo: string
}

const DescriptionBox = ({ video, channel, subs, timeAgo }: Props) => {
	const [collapsed, setCollapsed] = useState(true)
	const views = parseInt(video.statistics?.viewCount || '0')
	const date = video.snippet?.publishedAt ? moment(video.snippet?.publishedAt).format('MMM D, YYYY') : ''

	return (
		<Box display="flex" flexDirection="column" bgcolor={grey[200]} p={1.5} borderRadius={3} position="relative">
			<Button
				disabled={!collapsed}
				sx={{ position: 'absolute', inset: 0, borderRadius: 3 }}
				aria-label="expand description"
				onClick={() => setCollapsed(false)}
			></Button>
			<Typography fontSize={14} fontWeight="500">
				{`${views.toLocaleString()} ${views === 1 ? 'view' : 'views'}`}
				<Typography display="inline" fontSize={14} ml={1} fontWeight="500" component="span">
					{collapsed ? timeAgo : date}
				</Typography>
			</Typography>
			<Typography
				fontSize={14}
				fontWeight="400"
				color={grey[800]}
				whiteSpace="pre-wrap"
				overflow="hidden"
				sx={{ ...(collapsed && { WebkitBoxOrient: 'vertical', display: '-webkit-box', WebkitLineClamp: 3 }) }}
			>
				{video.snippet?.description}
			</Typography>

			{collapsed && (
				<Button sx={{ mr: 'auto', mt: 1, p: 0 }} onClick={() => setCollapsed(false)}>
					Show more
				</Button>
			)}

			{collapsed ? (
				<></>
			) : (
				<>
					<Divider sx={{ height: 6, bgcolor: alpha(grey[800], 0.15), borderBottomWidth: 0, my: 2 }} />
					<ChannelAvatar channel={channel} channelName={channel?.snippet?.title || ''} subs={subs} avatarSize={72} />
					<Stack
						mt={2}
						direction="row"
						width="min(100%, 720px)"
						spacing={2}
						sx={{ '& .MuiButtonBase-root': { flexGrow: 1, borderColor: grey[400], borderRadius: '18px' } }}
					>
						<Button variant="outlined" startIcon={<SlideshowOutlined />}>
							Videos
						</Button>
						<Button variant="outlined" startIcon={<PortraitOutlined />}>
							About
						</Button>
					</Stack>
					<Button sx={{ mt: 5, mr: 'auto', p: 0 }} onClick={() => setCollapsed(true)}>
						Show less
					</Button>
				</>
			)}
		</Box>
	)
}

export default DescriptionBox

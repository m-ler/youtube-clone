'use client'

import { Box, Button, Divider, Stack, Typography, Link as MUILink } from '@mui/material'
import { grey } from '@mui/material/colors'
import { youtube_v3 } from 'googleapis'
import ChannelAvatar from './ChannelAvatar'
import { PortraitOutlined, SlideshowOutlined } from '@mui/icons-material'
import moment from 'moment'
import { useState } from 'react'
import Link from 'next/link'

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
		<Box
			display="flex"
			flexDirection="column"
			bgcolor="action.hover"
			p={1.5}
			borderRadius={3}
			position="relative"
			color="text.primary"
		>
			<Button
				disabled={!collapsed}
				sx={{ position: 'absolute', inset: 0, borderRadius: 3 }}
				aria-label="expand description"
				onClick={() => setCollapsed(false)}
			></Button>
			<Typography fontSize={14} fontWeight="500" color="text.primary">
				{`${views.toLocaleString()} ${views === 1 ? 'view' : 'views'}`}
				<Typography display="inline" fontSize={14} ml={1} fontWeight="500" component="span" color="text.primary">
					{collapsed ? timeAgo : date}
				</Typography>
			</Typography>
			<Typography
				fontSize={14}
				fontWeight="400"
				whiteSpace="pre-wrap"
				overflow="hidden"
				color="text.primary"
				sx={{ ...(collapsed && { WebkitBoxOrient: 'vertical', display: '-webkit-box', WebkitLineClamp: 3 }) }}
			>
				{video.snippet?.description}
			</Typography>

			{collapsed && (
				<Button sx={{ mr: 'auto', mt: 1, p: 0 }} onClick={() => setCollapsed(false)} color="inherit">
					Show more
				</Button>
			)}

			{collapsed ? (
				<></>
			) : (
				<>
					<Divider sx={{ height: 6, bgcolor: 'action.selected', borderBottomWidth: 0, my: 2 }} />
					<ChannelAvatar channel={channel} channelName={channel?.snippet?.title || ''} subs={subs} avatarSize={72} />
					<Stack
						mt={2}
						direction="row"
						width="min(100%, 720px)"
						spacing={2}
						sx={{
							'& > a': {
								flexGrow: 1,
								color: 'inherit',
								'& > button': { width: '100%', borderColor: grey[400], borderRadius: '18px' },
							},
						}}
					>
						<MUILink component={Link} href={`/channel/${channel?.id}/videos`}>
							<Button variant="outlined" startIcon={<SlideshowOutlined />} color="inherit">
								Videos
							</Button>
						</MUILink>
						<MUILink component={Link} href={`/channel/${channel?.id}/about`}>
							<Button variant="outlined" startIcon={<PortraitOutlined />} color="inherit">
								About
							</Button>
						</MUILink>
					</Stack>
					<Button sx={{ mt: 5, mr: 'auto', p: 0 }} onClick={() => setCollapsed(true)} color="inherit">
						Show less
					</Button>
				</>
			)}
		</Box>
	)
}

export default DescriptionBox

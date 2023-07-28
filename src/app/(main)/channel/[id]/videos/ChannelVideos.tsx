'use client'

import VideoGrid from '@/components/videos/VideoGrid'
import { Box, Typography } from '@mui/material'
import { youtube_v3 } from 'googleapis'

type Props = {
	videos: youtube_v3.Schema$Video[]
}

const ChannelVideos = ({ videos }: Props) => {
	return (
		<Box p={2} py={3}>
			{videos.length ? (
				<VideoGrid videos={videos} hideChannelName />
			) : (
				<Typography fontSize={14} textAlign="center">
					This channel doesn&apos;t have any content
				</Typography>
			)}
		</Box>
	)
}

export default ChannelVideos

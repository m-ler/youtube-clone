'use client'

import VideoGrid from '@/components/videos/VideoGrid'
import { Box } from '@mui/material'
import { youtube_v3 } from 'googleapis'

type Props = {
	videos: youtube_v3.Schema$Video[]
}

const ChannelVideos = ({ videos }: Props) => {
	return (
		<Box p={2} py={3}>
			<VideoGrid videos={videos} hideChannelName />
		</Box>
	)
}

export default ChannelVideos

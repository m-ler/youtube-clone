'use client'

import VideoListSkeleton from '@/components/videos/VideoListSkeleton'
import { Box } from '@mui/material'

const Watch = () => {
	return (
		<Box display="flex" gap={2}>
			<Box bgcolor="#000" width={240} height={130} sx={{ aspectRatio: '16/9' }}></Box>
			<VideoListSkeleton />
		</Box>
	)
}

export default Watch

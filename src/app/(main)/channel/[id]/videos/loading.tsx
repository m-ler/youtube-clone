'use client'

import VideoGridSkeleton from '@/components/videos/VideoGridSkeleton'
import { Box } from '@mui/material'

const Loading = () => {
	return (
		<Box py={3}>
			<VideoGridSkeleton />
		</Box>
	)
}

export default Loading

'use client'
import { Box, Skeleton } from '@mui/material'

const VideoCardSkeleton = () => {
	return (
		<Box>
			<Skeleton variant="rounded" width="100%" height="auto" sx={{ aspectRatio: '16/9' }} />
			<Skeleton variant="rounded" height={16} sx={{ mt: 1 }} />
			<Skeleton variant="rounded" width="60%" height={16} sx={{ mt: 1 }} />
		</Box>
	)
}

export default VideoCardSkeleton

'use client'

import VideoListSkeleton from '@/components/videos/VideoListSkeleton'
import { Container } from '@mui/material'

const Loading = () => {
	return (
		<Container maxWidth="lg" sx={{ pt: 1.5, '&': { px: 3 } }}>
			<VideoListSkeleton />
		</Container>
	)
}

export default Loading

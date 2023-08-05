'use client'

import VideoListSkeleton from '@/components/videos/VideoListSkeleton'
import { Container } from '@mui/material'

const Loading = () => {
	return (
		<Container maxWidth="lg" sx={{ pt: 1.5, '&': { px: { xs: 1.5, sm: 3 } } }}>
			<VideoListSkeleton />
		</Container>
	)
}

export default Loading

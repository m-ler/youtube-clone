'use client'

import VideoGridSkeleton from '@/components/videos/VideoGridSkeleton'
import { Container } from '@mui/material'

const Loading = () => {
	return (
		<Container maxWidth="2xl" sx={{ pt: 1.5, '&': { px: 3 } }}>
			<VideoGridSkeleton />
		</Container>
	)
}

export default Loading

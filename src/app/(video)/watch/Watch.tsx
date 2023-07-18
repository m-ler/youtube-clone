'use client'

import VideoEmbed from '@/components/VideoEmbed'
import VideoListSkeleton from '@/components/videos/VideoListSkeleton'
import VideoMetadata from '@/components/watch/video-metadata'
import { Box, Container } from '@mui/material'

type Props = {
	videoId: string
}

const Watch = ({ videoId }: Props) => {
	return (
		<Container maxWidth={false} sx={{ maxWidth: 'min(100%,1765px)', width: '100%', pt: 3, px: 3 }}>
			<Box sx={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gridTemplateRows: 'auto 1fr' }}>
				<Box
					maxWidth="100%"
					height="auto"
					maxHeight="720px"
					gridColumn="1/2"
					overflow="hidden"
					sx={{ aspectRatio: '16/9' }}
				>
					<VideoEmbed videoId={videoId} />
				</Box>
				<Box maxWidth="100%" gridColumn="2/3" gridRow="1/3" pl={2} pr={4}>
					<VideoListSkeleton />
				</Box>
				<Box gridColumn="1/2" gridRow="2/3" pt={2} pb={4}>
					<VideoMetadata videoId={videoId} />
				</Box>
			</Box>
		</Container>
	)
}

export default Watch

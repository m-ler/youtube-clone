'use client'

import VideoEmbed from '@/components/VideoEmbed'
import VideoListSkeleton from '@/components/videos/VideoListSkeleton'
import VideoMetadata from '@/components/watch/video-metadata'
import { Box, Container } from '@mui/material'
import { useMemo } from 'react'

type Props = {
	videoId: string
}

const Watch = ({ videoId }: Props) => {
	const videoMetadata = useMemo(() => <VideoMetadata videoId={videoId} />, [videoId])

	return (
		<Container maxWidth={false} sx={{ maxWidth: 'min(100%,1765px)', width: '100%', pt: 3, px: 3 }}>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: { xs: '1fr', md: '2.95fr 1fr' },
					gridTemplateRows: { xs: 'auto auto auto', md: 'auto 1fr' },
				}}
			>
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
				<Box gridColumn="1/2" gridRow="2/3" pt={2} pb={4} overflow="hidden">
					{videoMetadata}
				</Box>
				<Box
					maxWidth="100%"
					gridColumn={{ xs: ' 1/2', md: '2/3' }}
					gridRow={{ sm: '3/4', md: '1/3' }}
					pl={{ xs: 0, md: 2 }}
					pr={{ xs: 0, md: 4 }}
				>
					<VideoListSkeleton />
				</Box>
			</Box>
		</Container>
	)
}

export default Watch

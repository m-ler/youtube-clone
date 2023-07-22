'use client'

import VideoEmbed from '@/components/VideoEmbed'
import VideoListSkeleton from '@/components/videos/VideoListSkeleton'
import { Box, Container } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
	videoId: string
	videoMetadata: ReactNode
	comments: ReactNode
}

const Watch = ({ videoId, videoMetadata, comments }: Props) => {
	return (
		<Container maxWidth={false} sx={{ maxWidth: 'min(100%,1765px)', width: '100%', pt: 3, px: 3 }}>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: { xs: '1fr', md: '2.95fr 1fr' },
					gridTemplateRows: { xs: 'auto auto auto 1fr', md: 'auto auto 1fr' },
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
					gridRow={{ sm: '3/4', md: '1/4' }}
					pl={{ xs: 0, md: 2 }}
					pr={{ xs: 0, md: 4 }}
				>
					<VideoListSkeleton />
				</Box>
				<Box width="100%" height="100%" gridColumn="1/2" gridRow={{ sm: '4/5', md: '3/4' }} pb={2}>
					{comments}
				</Box>
			</Box>
		</Container>
	)
}

export default Watch

'use client'

import VideoGrid from '@/components/videos/VideoGrid'
import { Container, Typography } from '@mui/material'
import { youtube_v3 } from 'googleapis'

type Props = {
	videos: youtube_v3.Schema$Video[]
}

const Home = ({ videos }: Props) => {
	return (
		<Container maxWidth="2xl" sx={{ pt: 1.5, '&': { px: 3 } }}>
			{videos.length ? (
				<VideoGrid videos={videos} />
			) : (
				<Typography fontSize={14} textAlign="center" color="text.secondary">
					No videos found
				</Typography>
			)}
		</Container>
	)
}

export default Home

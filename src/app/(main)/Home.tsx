'use client'

import VideoGrid from '@/components/videos/VideoGrid'
import { Container } from '@mui/material'
import { youtube_v3 } from 'googleapis'

type Props = {
	videos: youtube_v3.Schema$Video[]
}

const Home = ({ videos }: Props) => {
	console.log(videos)

	return (
		<Container maxWidth="2xl" sx={{ pt: 1.5, '&': { px: 3 } }}>
			<VideoGrid videos={videos} />
		</Container>
	)
}

export default Home

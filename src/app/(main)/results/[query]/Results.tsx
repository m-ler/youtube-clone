'use client'

import VideoList from '@/components/videos/VideoList'
import { Container } from '@mui/material'
import { youtube_v3 } from 'googleapis'

type Props = {
	results: youtube_v3.Schema$Video[]
}

const Results = ({ results }: Props) => {
	return (
		<Container maxWidth="lg" sx={{ pt: 1.5, '&': { px: 3 } }}>
			<VideoList videos={results} />
		</Container>
	)
}

export default Results
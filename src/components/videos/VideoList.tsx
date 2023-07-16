'use client'

import { Stack } from '@mui/material'
import { youtube_v3 } from 'googleapis'
import HorizontalVideoCard from './HorizontalVideoCard'

type Props = {
	videos: youtube_v3.Schema$Video[]
}

const VideoList = ({ videos }: Props) => {
	return (
		<Stack spacing={1.5} pb={4}>
			{videos.map((x, i) => (
				<HorizontalVideoCard key={i} video={x} />
			))}
		</Stack>
	)
}

export default VideoList

'use client'

import VideoCard from '@/components/videos/VideoCard'
import { Grid } from '@mui/material'
import { youtube_v3 } from 'googleapis'

type Props = {
	videos: youtube_v3.Schema$Video[]
}

const VideoGrid = ({ videos }: Props) => {
	return (
		<Grid container columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, '2xl': 6 }} columnSpacing={2} rowSpacing={5} pb={12}>
			{videos.map((x) => (
				<Grid item key={x.id} xs={1}>
					<VideoCard video={x} />
				</Grid>
			))}
		</Grid>
	)
}

export default VideoGrid

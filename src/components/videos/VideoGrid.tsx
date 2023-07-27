'use client'

import VideoCard from '@/components/videos/VideoCard'
import { Grid } from '@mui/material'
import { youtube_v3 } from 'googleapis'

type Props = {
	videos: youtube_v3.Schema$Video[]
	hideChannelName?: boolean
}

const VideoGrid = ({ videos, hideChannelName }: Props) => {
	return (
		<Grid container columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, '2xl': 6 }} columnSpacing={2} rowSpacing={5} pb={12}>
			{videos.map((x, i) => (
				<Grid item key={i} xs={1} maxWidth="100%">
					<VideoCard video={x} hideChannelName={hideChannelName} />
				</Grid>
			))}
		</Grid>
	)
}

export default VideoGrid

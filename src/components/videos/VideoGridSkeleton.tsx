'use client'

import { Grid } from '@mui/material'
import VideoCardSkeleton from './VideoCardSkeleton'

const QUANTITY = 30

const VideoGridSkeleton = () => {
	return (
		<Grid container columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, '2xl': 6 }} columnSpacing={2} rowSpacing={5} pb={12}>
			{Array(QUANTITY)
				.fill('')
				.map((x, i) => (
					<Grid item key={i} xs={1}>
						<VideoCardSkeleton />
					</Grid>
				))}
		</Grid>
	)
}

export default VideoGridSkeleton

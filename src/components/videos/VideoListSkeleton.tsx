import { Stack } from '@mui/material'
import HorizontalVideoCardSkeleton from './HorizontalVideoCardSkeleton'

const QUANTITY = 30

const VideoListSkeleton = () => {
	return (
		<Stack spacing={1.5} pb={4}>
			{Array(QUANTITY)
				.fill('')
				.map((x, i) => (
					<HorizontalVideoCardSkeleton key={i} />
				))}
		</Stack>
	)
}

export default VideoListSkeleton

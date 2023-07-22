'use client'
import { Box, Skeleton, Stack } from '@mui/material'

const VideoMetadataSkeleton = () => {
	return (
		<Stack spacing={1.5}>
			<Skeleton variant="text" width="min(100%, 720px)" sx={{ fontSize: '24px' }} />
			<Stack direction="row" alignItems="center" spacing={1.5}>
				<Skeleton variant="circular" width={40} height={40} />
				<Box width={140} pr={1}>
					<Skeleton variant="text" width="100%" sx={{ fontSize: '16px' }} />
					<Skeleton variant="text" width="50%" sx={{ fontSize: '12px' }} />
				</Box>
				<Skeleton variant="rounded" width={95} height={36} sx={{ borderRadius: '18px' }} />
			</Stack>
			<Skeleton variant="rounded" width="100%" height={120}></Skeleton>
		</Stack>
	)
}

export default VideoMetadataSkeleton

'use client'
import { Box, Skeleton } from '@mui/material'

const ChannelHeaderSkeleton = () => {
	return (
		<Box>
			<Box display="flex" flexDirection="row" mb={2} alignItems="center" gap={2.5} width="100%">
				<Skeleton variant="circular" width={128} height={128} sx={{ display: { xs: 'none', md: 'inline-flex' } }} />
				<Box display="flex" flexDirection="column" justifyContent="center" flexGrow={1}>
					<Skeleton variant="rounded" width="min(100%, 210px)" height={32} />
					<Skeleton variant="rounded" width="min(100%, 320px)" height={16} sx={{ mt: 1 }} />
					<Skeleton variant="rounded" width="min(100%, 480px)" height={16} sx={{ mt: 2 }} />
				</Box>
			</Box>
		</Box>
	)
}

export default ChannelHeaderSkeleton

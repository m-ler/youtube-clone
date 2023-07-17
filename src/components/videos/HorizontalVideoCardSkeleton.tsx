'use client'

import { Box, Skeleton, Stack } from '@mui/material'

const HorizontalVideoCardSkeleton = () => {
	return (
		<Stack direction="row" gap={2} maxHeight={200}>
			<Skeleton
				variant="rounded"
				width="100%"
				height="auto"
				sx={{ minWidth: '120', maxWidth: '360px', aspectRatio: '16/9' }}
			/>
			<Box width="90%">
				<Skeleton variant="rounded" height={18} sx={{ mt: 1 }} />
				<Skeleton variant="rounded" width={80} height={16} sx={{ mt: 1 }} />
				<Skeleton variant="rounded" width="80%" height={16} sx={{ mt: 3 }} />
			</Box>
		</Stack>
	)
}

export default HorizontalVideoCardSkeleton

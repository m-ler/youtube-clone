'use client'

import { CircularProgress, Stack } from '@mui/material'

const Loading = () => {
	return (
		<Stack width="100%" alignItems="center" pt={4} px={2}>
			<CircularProgress size={24} />
		</Stack>
	)
}

export default Loading

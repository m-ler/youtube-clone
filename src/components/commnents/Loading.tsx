'use client'

import { Box, CircularProgress } from '@mui/material'
import { grey } from '@mui/material/colors'

const Loading = () => {
	return (
		<Box maxWidth="100%" display="flex">
			<CircularProgress size={28} sx={{ mx: 'auto', color: grey[500] }} />
		</Box>
	)
}

export default Loading

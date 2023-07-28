'use client'

import ErrorIllustration from '@/assets/svgr/ErrorIllustration'
import { Box, Stack, Typography } from '@mui/material'

const Error = ({ error }: { error: Error }) => {
	return (
		<Stack width="100%" maxWidth="100%" alignItems="center" pt={4} spacing={2}>
			<ErrorIllustration width={120} />
			<Box px={2}>
				<Typography fontSize={20} fontWeight="bold" textAlign="center">
					Something went wrong...
				</Typography>
				<Typography
					fontSize={14}
					textAlign="center"
					dangerouslySetInnerHTML={{
						__html: error.message,
					}}
					sx={{
						'& a': {
							pointerEvents: 'none',
							textDecoration: 'none',
							color: 'inherit',
						},
					}}
				></Typography>
			</Box>
		</Stack>
	)
}

export default Error

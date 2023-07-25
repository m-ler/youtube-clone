'use client'

import { Box, Container, Skeleton } from '@mui/material'

const Loading = () => {
	return (
		<>
			<Box px={2}>
				<Container maxWidth={false} sx={{ maxWidth: '1284px', '&': { p: 0 } }}>
					<Box>
						<Box display="flex" flexDirection="row" mb={2}>
							<Skeleton variant="circular" width={128} height={128} />
							<Box display="flex" flexDirection="column" justifyContent="center" ml={2.5}>
								<Skeleton variant="rounded" width={210} height={60} />
								<Skeleton variant="rounded" width={210} height={60} />
								<Skeleton variant="rounded" width={210} height={60} />
							</Box>
						</Box>
					</Box>
				</Container>
			</Box>
		</>
	)
}

export default Loading

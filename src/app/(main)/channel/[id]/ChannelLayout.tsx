'use client'

import { Box, Container, Divider, Paper, Tab, Tabs } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PropsWithChildren, ReactNode } from 'react'

type Props = {
	channelHeader: ReactNode
} & PropsWithChildren

const ChannelLayout = ({ channelHeader, children }: Props) => {
	const pathname = usePathname()

	return (
		<>
			<Box px={2} zIndex={10} overflow="visible">
				<Container maxWidth={false} sx={{ maxWidth: '1284px', '&': { p: 0 } }}>
					<Box>{channelHeader}</Box>
				</Container>
			</Box>
			<Box sx={{ position: 'sticky', top: '56px', zIndex: 10 }} component={Paper} elevation={0}>
				<Container maxWidth={false} sx={{ maxWidth: '1284px', '&': { p: 0 } }}>
					<Tabs
						value={pathname.includes('/videos') ? 0 : pathname.includes('/about') ? 1 : null}
						textColor="inherit"
						sx={{
							'& .MuiTabs-indicator': {
								backgroundColor: 'text.secondary',
							},
						}}
					>
						<Tab label="Videos" component={Link} href="videos" />
						<Tab label="About" component={Link} href="about" />
					</Tabs>
				</Container>
				<Divider />
			</Box>
			<Container maxWidth={false} sx={{ maxWidth: '1284px', '&': { p: 0 } }}>
				{children}
			</Container>
		</>
	)
}

export default ChannelLayout

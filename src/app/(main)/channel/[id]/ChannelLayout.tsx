'use client'

import { Box, Container, Divider, Paper, Tab, Tabs } from '@mui/material'
import { PropsWithChildren, ReactNode } from 'react'

type Props = {
	channelHeader: ReactNode
} & PropsWithChildren

const ChannelLayout = ({ channelHeader, children }: Props) => {
	return (
		<>
			<Box px={2} zIndex={10} overflow="visible">
				<Container maxWidth={false} sx={{ maxWidth: '1284px', '&': { p: 0 } }}>
					<Box>{channelHeader}</Box>
				</Container>
			</Box>
			<Box sx={{ position: 'sticky', top: '56px', zIndex: 10 }} component={Paper} elevation={0}>
				<Container maxWidth={false} sx={{ maxWidth: '1284px', '&': { p: 0 } }}>
					<Tabs value={0}>
						<Tab label="Videos" />
						<Tab label="Channels" />
						<Tab label="About" />
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

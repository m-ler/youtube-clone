'use client'

import { getFormattedChannelData } from '@/lib/utils/youtube'
import { KeyboardArrowRightOutlined } from '@mui/icons-material'
import { Avatar, Box, Container, Divider, Tab, Tabs, Typography } from '@mui/material'
import { youtube_v3 } from 'googleapis'
import { PropsWithChildren } from 'react'

type Props = {
	channel: youtube_v3.Schema$Channel
} & PropsWithChildren

const ChannelLayout = ({ channel, children }: Props) => {
	const { channelName, subs, videos } = getFormattedChannelData(channel)

	return (
		<>
			<Box px={2}>
				<Container maxWidth={false} sx={{ maxWidth: '1284px', '&': { p: 0 } }}>
					<Box>
						<Box display="flex" flexDirection="row" mb={2}>
							<Avatar
								alt={channelName}
								src={channel.snippet?.thumbnails?.high?.url || ''}
								sx={{ width: '128px', height: '128px', display: { xs: 'none', sm: 'flex' } }}
							></Avatar>
							<Box display="flex" flexDirection="column" justifyContent="center" ml={2.5}>
								<Typography component="h1" fontSize={24}>
									{channelName}
								</Typography>
								<Typography fontSize={14}>
									{channel.snippet?.customUrl}
									<Typography component="span" fontSize={14} ml={1} color="text.secondary">
										{subs}
									</Typography>
									<Typography component="span" fontSize={14} ml={1} color="text.secondary">
										{videos}
									</Typography>
								</Typography>
								<Box display="flex" alignItems="center" mt={1}>
									<Typography
										fontSize={14}
										color="text.secondary"
										display="flex"
										alignItems="center"
										maxWidth="286px"
										mr={1}
										sx={{
											overflow: 'hidden',
											WebkitBoxOrient: 'vertical',
											display: '-webkit-box',
											WebkitLineClamp: 1,
											textDecoration: 'none',
										}}
									>
										{channel.snippet?.description || 'More about this channel'}
									</Typography>
									<KeyboardArrowRightOutlined />
								</Box>
							</Box>
						</Box>

						<Tabs value={0}>
							<Tab label="Videos" />
							<Tab label="Channels" />
							<Tab label="About" />
						</Tabs>
					</Box>
				</Container>
			</Box>
			<Divider />
			<Container maxWidth={false} sx={{ maxWidth: '1284px', '&': { p: 0 } }}>
				{children}
			</Container>
		</>
	)
}

export default ChannelLayout

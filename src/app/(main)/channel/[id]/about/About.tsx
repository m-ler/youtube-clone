'use client'

import { OutlinedFlagOutlined, SendOutlined } from '@mui/icons-material'
import { Box, Divider, Grid, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { youtube_v3 } from 'googleapis'
import moment from 'moment'

type Props = {
	channel: youtube_v3.Schema$Channel | null
}

const About = ({ channel }: Props) => {
	const dateJoined = channel?.snippet?.publishedAt ? moment(channel?.snippet?.publishedAt).format('MMM D, YYYY') : '-'
	const totalViews = Number(channel?.statistics?.viewCount || '0').toLocaleString()

	return channel ? (
		<Grid container columns={{ xs: 1, sm: 12 }} px={{ xs: 2, sm: 0 }} pt={5} pb={4} spacing={{ xs: 6, sm: 10 }}>
			<Grid item xs={8}>
				<Box>
					<Typography color="text.primary">Description</Typography>
					<Typography mt={2} fontSize={14} whiteSpace="pre-line" color="text.primary">
						{channel.snippet?.description || '-'}
					</Typography>
				</Box>
			</Grid>
			<Grid item xs={4}>
				<Stack spacing={1.5}>
					<Typography color="text.primary">Stats</Typography>
					<Divider />
					<Typography mt={2} fontSize={14} whiteSpace="pre-line" color="text.primary">
						{`Joined ${dateJoined}`}
					</Typography>
					<Divider />
					<Typography mt={2} fontSize={14} whiteSpace="pre-line" color="text.primary">
						{`${totalViews} ${totalViews === '1' ? 'view' : 'views'}`}
					</Typography>
					<Divider />
					<Stack direction="row" spacing={1.5}>
						<Tooltip title="Report user">
							<IconButton edge="start">
								<OutlinedFlagOutlined />
							</IconButton>
						</Tooltip>
						<Tooltip title="Share">
							<IconButton>
								<SendOutlined />
							</IconButton>
						</Tooltip>
					</Stack>
				</Stack>
			</Grid>
		</Grid>
	) : (
		<></>
	)
}

export default About

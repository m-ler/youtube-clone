'use client'

import { Avatar, Container, Grid, Stack, Typography } from '@mui/material'
import { youtube_v3 } from 'googleapis'
import Image from 'next/image'

type Props = {
	videos: youtube_v3.Schema$Video[]
}

const Home = ({ videos }: Props) => {
	console.log(videos)

	return (
		<Container maxWidth="xl">
			<Grid container columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
				{videos.map((x) => (
					<Grid item key={x.id} xs={1}>
						<Stack width="100%" height="100%" overflow="hidden">
							<Image
								priority
								src={x.snippet?.thumbnails?.standard?.url || ''}
								alt="Thumbnail"
								width={640}
								height={360}
								style={{ borderRadius: 15, width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
							/>
							<Stack direction="row" flexGrow={1}>
								<Avatar alt={x.snippet?.channelTitle || ''}>{x.snippet?.channelTitle?.[0]}</Avatar>
								<Typography>{x.snippet?.title}</Typography>
							</Stack>
						</Stack>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default Home

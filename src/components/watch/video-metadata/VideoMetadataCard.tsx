import { Grid, Typography } from '@mui/material'
import { youtube_v3 } from 'googleapis'

type Props = {
	video: youtube_v3.Schema$Video
}

const VideoMetadataCard = ({ video }: Props) => {
	console.log(video)

	return (
		<Grid container columns={{ xs: 1, sm: 2 }}>
			<Grid item xs={2}>
				<Typography variant="h1" fontSize={20} fontWeight="600">
					{video.snippet?.title}
				</Typography>
			</Grid>
		</Grid>
	)
}

export default VideoMetadataCard

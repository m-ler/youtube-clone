import { formatISO8601Duration } from '@/lib/moment/utils'
import { Box, Typography, alpha } from '@mui/material'
import { youtube_v3 } from 'googleapis'
import Image from 'next/image'

type Props = {
	video: youtube_v3.Schema$Video
}

const VideoThumbnail = ({ video }: Props) => {
	const duration = formatISO8601Duration(video.contentDetails?.duration || '')

	return (
		<Box position="relative">
			<Image
				priority
				src={video.snippet?.thumbnails?.high?.url || ''}
				alt="Thumbnail"
				width={640}
				height={360}
				style={{
					borderRadius: 15,
					width: '100%',
					height: 'auto',
					display: 'block',
					objectFit: 'cover',
					aspectRatio: '16/8.9',
				}}
			/>
			{video.contentDetails?.duration && (
				<Typography
					position="absolute"
					bottom="5px"
					right="5px"
					fontSize={12}
					color="white"
					px={0.5}
					borderRadius={1.25}
					bgcolor={alpha('#000', 0.75)}
					sx={{ pointerEvents: 'none' }}
				>
					{duration}
				</Typography>
			)}
		</Box>
	)
}

export default VideoThumbnail

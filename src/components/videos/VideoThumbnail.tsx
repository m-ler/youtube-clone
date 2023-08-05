import { formatISO8601Duration } from '@/lib/moment/utils'
import { getFormattedVideoData } from '@/lib/utils/youtube'
import { Box, Typography, alpha } from '@mui/material'
import { youtube_v3 } from 'googleapis'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'

type Props = {
	video: youtube_v3.Schema$Video
	borderRadius: 'small' | 'medium'
}

const VideoThumbnail = ({ video, borderRadius }: Props) => {
	const { videoId } = useMemo(() => getFormattedVideoData(video), [video.id])
	const duration = formatISO8601Duration(video.contentDetails?.duration || '')

	return (
		<Box position="relative">
			<Link href={`/watch/${videoId}`}>
				<Image
					priority
					src={video.snippet?.thumbnails?.high?.url || ''}
					alt="Thumbnail"
					width={640}
					height={360}
					style={{
						borderRadius: borderRadius === 'small' ? '8px' : '15px',
						width: '640px',
						maxWidth: '100%',
						height: 'auto',
						display: 'block',
						objectFit: 'cover',
						aspectRatio: '16/8.9',
					}}
				/>
			</Link>

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

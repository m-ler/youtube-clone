import { formatISO8601Duration } from '@/lib/moment/utils'
import { Box, Card, Tooltip, Typography, alpha } from '@mui/material'
import { grey } from '@mui/material/colors'
import { youtube_v3 } from 'googleapis'
import moment from 'moment'
import Image from 'next/image'

type Props = {
	video: youtube_v3.Schema$Video
}

const formatNumber = new Intl.NumberFormat('en', {
	notation: 'compact',
	compactDisplay: 'short',
	maximumSignificantDigits: 3,
}).format

const VideoCard = ({ video }: Props) => {
	const viewCount = video.statistics?.viewCount
	const views =
		viewCount === '0'
			? 'No views'
			: `${formatNumber(parseInt(viewCount || '0'))} ${viewCount === '1' ? 'view' : 'views'}`

	return (
		<Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }} elevation={0}>
			<Box position="relative">
				<Image
					priority
					src={video.snippet?.thumbnails?.standard?.url || ''}
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
					{formatISO8601Duration(video.contentDetails?.duration || '')}
				</Typography>
			</Box>

			<Box display="flex" flexDirection="column" flexGrow={1} mt={1.5}>
				<Typography
					title={video.snippet?.title || ''}
					fontSize={16}
					color={grey[900]}
					fontWeight="600"
					lineHeight="1.4rem"
					sx={{ overflow: 'hidden', WebkitBoxOrient: 'vertical', display: '-webkit-box', WebkitLineClamp: 2 }}
				>
					{video.snippet?.title}
				</Typography>
				<Tooltip title={video.snippet?.channelTitle} placement="top">
					<Typography
						fontSize={14}
						mt={0.4}
						color={grey[700]}
						mr="auto"
						sx={{ overflow: 'hidden', WebkitBoxOrient: 'vertical', display: '-webkit-box', WebkitLineClamp: 1 }}
					>
						{video.snippet?.channelTitle}
					</Typography>
				</Tooltip>
				<Typography fontSize={14} color={grey[700]}>
					{views}
					<Typography display="inline" mx={0.75} fontSize={10} component="span">
						•
					</Typography>
					{moment(video.snippet?.publishedAt).fromNow()}
				</Typography>
			</Box>
		</Card>
	)
}

export default VideoCard

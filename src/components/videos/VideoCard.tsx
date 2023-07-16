'use client'
import { Box, Card, IconButton, Tooltip, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { youtube_v3 } from 'googleapis'
import moment from 'moment'
import VideoThumbnail from './VideoThumbnail'
import { MoreVert } from '@mui/icons-material'
import { useState } from 'react'
import MoreMenu from './MoreMenu'

type Props = {
	video: youtube_v3.Schema$Video
}

const formatNumber = new Intl.NumberFormat('en', {
	notation: 'compact',
	compactDisplay: 'short',
	maximumSignificantDigits: 3,
}).format

const VideoCard = ({ video }: Props) => {
	const timeAgo = moment(video.snippet?.publishedAt).fromNow().replace(/^a/, '1')
	const viewCount = video.statistics?.viewCount
	const [menuButton, setMenuButton] = useState<HTMLElement | null>(null)
	const views =
		viewCount === '0'
			? 'No views'
			: `${formatNumber(parseInt(viewCount || '0'))} ${viewCount === '1' ? 'view' : 'views'}`

	return (
		<Card
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				overflow: 'visible',
				'&:hover .more-menu': { opacity: 1 },
			}}
			elevation={0}
		>
			<VideoThumbnail video={video} />
			<Box display="flex" alignItems="start">
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
						{viewCount && (
							<>
								{views}
								<Typography display="inline" mx={0.75} fontSize={10} component="span">
									•
								</Typography>
							</>
						)}

						{timeAgo}
					</Typography>
				</Box>
				<IconButton
					className="more-menu"
					sx={{ mt: 0.75, opacity: 0 }}
					edge="end"
					onClick={(e) => setMenuButton(e.currentTarget)}
				>
					<MoreVert sx={{ fontSize: 20 }} />
				</IconButton>
			</Box>
			<MoreMenu anchorEl={menuButton} onClose={() => setMenuButton(null)} />
		</Card>
	)
}

export default VideoCard

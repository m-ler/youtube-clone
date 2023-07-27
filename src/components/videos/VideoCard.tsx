'use client'
import { Box, Card, IconButton, Tooltip, Typography, Link as MUILink } from '@mui/material'
import { grey } from '@mui/material/colors'
import { youtube_v3 } from 'googleapis'
import VideoThumbnail from './VideoThumbnail'
import { MoreVert } from '@mui/icons-material'
import { useMemo, useState } from 'react'
import MoreMenu from './MoreMenu'
import Link from 'next/link'
import { getFormattedVideoData } from '@/lib/utils/youtube'
import { decode } from 'html-entities'

type Props = {
	video: youtube_v3.Schema$Video
	hideChannelName?: boolean
}

const VideoCard = ({ video, hideChannelName }: Props) => {
	const [menuButton, setMenuButton] = useState<HTMLElement | null>(null)
	const { videoId, timeAgo, viewCount, views } = useMemo(() => getFormattedVideoData(video), [video.id])

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
					<MUILink
						href={`/watch?v=${videoId}`}
						component={Link}
						title={video.snippet?.title || ''}
						fontSize={16}
						color={grey[900]}
						fontWeight="600"
						lineHeight="1.4rem"
						sx={{
							overflow: 'hidden',
							WebkitBoxOrient: 'vertical',
							display: '-webkit-box',
							WebkitLineClamp: 2,
							textDecoration: 'none',
						}}
					>
						<>{decode(video.snippet?.title)}</>
					</MUILink>
					{!hideChannelName && (
						<Tooltip title={video.snippet?.channelTitle} placement="top">
							<MUILink
								href={`/channel/${video.snippet?.channelId}/videos`}
								component={Link}
								fontSize={14}
								my={0.4}
								color={grey[700]}
								mr="auto"
								sx={{
									overflow: 'hidden',
									WebkitBoxOrient: 'vertical',
									display: '-webkit-box',
									WebkitLineClamp: 1,
									textDecoration: 'none',
									'&:hover': {
										color: grey[900],
									},
								}}
							>
								{video.snippet?.channelTitle}
							</MUILink>
						</Tooltip>
					)}

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

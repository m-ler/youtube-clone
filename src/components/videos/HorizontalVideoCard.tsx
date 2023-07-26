'use client'
import { Box, Card, IconButton, Stack, Tooltip, Typography, Link as MUILink } from '@mui/material'
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
}

const HorizontalVideoCard = ({ video }: Props) => {
	const { videoId, timeAgo, viewCount, views } = useMemo(() => getFormattedVideoData(video), [video.id])
	const [menuButton, setMenuButton] = useState<HTMLElement | null>(null)

	return (
		<Card
			sx={{
				width: '100%',
				height: '100%',
				maxHeight: '200px',
				display: 'flex',
				gap: 2,
				overflow: 'visible',
				'&:hover .more-menu': { opacity: 1 },
			}}
			elevation={0}
		>
			<Box maxWidth={360} minWidth={240}>
				<VideoThumbnail video={video} />
			</Box>

			<Box width="90%" display="flex" flexDirection="column" flexGrow={1} mr="auto">
				<Stack position="relative" pr={4}>
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
						{decode(video.snippet?.title)}
					</MUILink>
					<IconButton
						className="more-menu"
						sx={{ opacity: 0, position: 'absolute', top: '-6px', right: 0 }}
						onClick={(e) => setMenuButton(e.currentTarget)}
					>
						<MoreVert sx={{ fontSize: 20 }} />
					</IconButton>
				</Stack>

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
				<Tooltip title={video.snippet?.channelTitle} placement="top">
					<MUILink
						href={`/channel/${video.snippet?.channelId}/videos`}
						fontSize={14}
						mt={0.4}
						color={grey[700]}
						mr="auto"
						sx={{
							overflow: 'hidden',
							WebkitBoxOrient: 'vertical',
							display: '-webkit-box',
							WebkitLineClamp: 1,
							textDecoration: 'none',
						}}
					>
						{video.snippet?.channelTitle}
					</MUILink>
				</Tooltip>
				<Typography
					fontSize={14}
					mt={0.4}
					color={grey[700]}
					mr="auto"
					sx={{ overflow: 'hidden', WebkitBoxOrient: 'vertical', display: '-webkit-box', WebkitLineClamp: 1 }}
				>
					{video.snippet?.description}
				</Typography>
			</Box>
			<MoreMenu anchorEl={menuButton} onClose={() => setMenuButton(null)} />
		</Card>
	)
}

export default HorizontalVideoCard

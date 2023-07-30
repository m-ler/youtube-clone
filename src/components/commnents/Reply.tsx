'use client'
import { stringAvatar, stringToColor } from '@/lib/utils/avatar'
import { getFormattedReplyData } from '@/lib/utils/youtube'
import { ThumbDownOutlined, ThumbUpOffAltOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, IconButton, Link, Stack, Tooltip, Typography, Link as MUILink } from '@mui/material'
import { youtube_v3 } from 'googleapis'

type Props = {
	reply: youtube_v3.Schema$Comment
}

const Reply = ({ reply }: Props) => {
	const { likes, likesCount, timeAgo, channelId } = getFormattedReplyData(reply)

	return (
		<Stack key={reply.id} direction="row" spacing={2}>
			<Link href={`/channel/${channelId}/videos`}>
				<Avatar
					src={reply?.snippet?.authorProfileImageUrl || ''}
					sx={{ bgcolor: stringToColor(reply?.snippet?.authorDisplayName || ''), width: 24, height: 24 }}
					alt={reply?.snippet?.authorDisplayName || ''}
				>
					{stringAvatar(reply?.snippet?.authorProfileImageUrl || '')}
				</Avatar>
			</Link>
			<Box display="flex" flexDirection="column">
				<MUILink
					component={Link}
					href={`/channel/${channelId}/videos`}
					fontSize={13}
					fontWeight="500"
					sx={{ textDecoration: 'none' }}
					color="text.primary"
				>
					{reply?.snippet?.authorDisplayName || ''}
					<Typography component="span" fontSize={12} color="text.secondary" pl={1}>
						{timeAgo}
					</Typography>
				</MUILink>
				<Typography fontSize={14} fontWeight="300" mt={0.25} color="text.primary">
					{reply?.snippet?.textOriginal || ''}
				</Typography>
				<Box display="flex" flexDirection="row" mt={0.75} alignItems="center" color="text.primary">
					<Tooltip title="Like">
						<IconButton size="small" edge="start">
							<ThumbUpOffAltOutlined fontSize="small" />
						</IconButton>
					</Tooltip>

					{likesCount > 0 && (
						<Typography fontSize={12} mr={1} fontWeight="300">
							{likes}
						</Typography>
					)}
					<Tooltip title="Dislike">
						<IconButton size="small" sx={{ mr: 1 }}>
							<ThumbDownOutlined fontSize="small" />
						</IconButton>
					</Tooltip>

					<Button size="small" sx={{ borderRadius: '18px' }} color="inherit">
						Reply
					</Button>
				</Box>
			</Box>
		</Stack>
	)
}

export default Reply

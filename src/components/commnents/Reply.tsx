'use client'
import { stringAvatar, stringToColor } from '@/lib/utils/avatar'
import { getFormattedReplyData } from '@/lib/utils/youtube'
import { ThumbDownOutlined, ThumbUpOffAltOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { youtube_v3 } from 'googleapis'

type Props = {
	reply: youtube_v3.Schema$Comment
}

const Reply = ({ reply }: Props) => {
	const { likes, likesCount, timeAgo } = getFormattedReplyData(reply)

	return (
		<Stack key={reply.id} direction="row" spacing={2}>
			<Avatar
				src={reply?.snippet?.authorProfileImageUrl || ''}
				sx={{ bgcolor: stringToColor(reply?.snippet?.authorDisplayName || ''), width: 24, height: 24 }}
				alt={reply?.snippet?.authorDisplayName || ''}
			>
				{stringAvatar(reply?.snippet?.authorProfileImageUrl || '')}
			</Avatar>
			<Box display="flex" flexDirection="column">
				<Typography fontSize={13} fontWeight="500">
					{reply?.snippet?.authorDisplayName || ''}
					<Typography component="span" fontSize={12} color="text.secondary" pl={1}>
						{timeAgo}
					</Typography>
				</Typography>
				<Typography fontSize={14} fontWeight="300" mt={0.25}>
					{reply?.snippet?.textOriginal || ''}
				</Typography>
				<Box display="flex" flexDirection="row" mt={0.75} alignItems="center">
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

					<Button size="small" sx={{ borderRadius: '18px' }}>
						Reply
					</Button>
				</Box>
			</Box>
		</Stack>
	)
}

export default Reply

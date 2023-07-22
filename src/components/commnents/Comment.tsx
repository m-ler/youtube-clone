'use client'
import { stringAvatar, stringToColor } from '@/lib/utils/avatar'
import { ThumbDownOutlined, ThumbUpOffAltOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { youtube_v3 } from 'googleapis'

type Props = {
	comment: youtube_v3.Schema$CommentThread
}

const Comment = ({ comment }: Props) => {
	const likeCount = comment.snippet?.topLevelComment?.snippet?.likeCount || 0

	return (
		<Stack key={comment.id} direction="row" spacing={2}>
			<Avatar
				src={comment.snippet?.topLevelComment?.snippet?.authorProfileImageUrl || ''}
				sx={{ bgcolor: stringToColor(comment.snippet?.topLevelComment?.snippet?.authorDisplayName || '') }}
				alt={comment.snippet?.topLevelComment?.snippet?.authorDisplayName || ''}
			>
				{stringAvatar(comment.snippet?.topLevelComment?.snippet?.authorProfileImageUrl || '')}
			</Avatar>
			<Box display="flex" flexDirection="column">
				<Typography fontSize={13} fontWeight="500">
					{comment.snippet?.topLevelComment?.snippet?.authorDisplayName || ''}
					<Typography component="span" fontSize={12} color="text.secondary" pl={1}>
						11 days ago
					</Typography>
				</Typography>
				<Typography fontSize={14} fontWeight="300" mt={0.25}>
					{comment.snippet?.topLevelComment?.snippet?.textOriginal || ''}
				</Typography>
				<Box display="flex" flexDirection="row" mt={0.75} alignItems="center">
					<Tooltip title="Like">
						<IconButton size="small" edge="start">
							<ThumbUpOffAltOutlined fontSize="small" />
						</IconButton>
					</Tooltip>

					{likeCount > 0 && (
						<Typography fontSize={12} mr={1} fontWeight="300">
							{likeCount}
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

export default Comment

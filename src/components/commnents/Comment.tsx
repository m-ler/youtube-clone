'use client'
import { stringAvatar, stringToColor } from '@/lib/utils/avatar'
import { KeyboardArrowDown, KeyboardArrowUp, ThumbDownOutlined, ThumbUpOffAltOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { youtube_v3 } from 'googleapis'
import Reply from './Reply'
import { useState } from 'react'
import { getFormattedCommentData } from '@/lib/utils/youtube'

type Props = {
	comment: youtube_v3.Schema$CommentThread
}

const Comment = ({ comment }: Props) => {
	const replyCount = comment.replies?.comments?.length || 0
	const [showReplies, setShowReplies] = useState(false)
	const { likes, likesCount, timeAgo } = getFormattedCommentData(comment)

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
						{timeAgo}
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
				{Boolean(replyCount) && (
					<Box>
						<Button
							color="info"
							startIcon={showReplies ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
							sx={{ borderRadius: '18px', '& > .MuiButton-startIcon': { scale: '1.15' } }}
							onClick={() => setShowReplies((show) => !show)}
						>
							{`${replyCount} ${replyCount === 1 ? 'reply' : 'replies'}`}
						</Button>
						{showReplies && (
							<Stack gap={1.5} pt={1}>
								{comment?.replies?.comments?.map((x) => (
									<Reply key={x.id} reply={x} />
								))}
							</Stack>
						)}
					</Box>
				)}
			</Box>
		</Stack>
	)
}

export default Comment

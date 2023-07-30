'use client'
import { stringAvatar, stringToColor } from '@/lib/utils/avatar'
import { KeyboardArrowDown, KeyboardArrowUp, ThumbDownOutlined, ThumbUpOffAltOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, IconButton, Link, Stack, Tooltip, Typography, Link as MUILink } from '@mui/material'
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
	const { likes, likesCount, timeAgo, channelId } = getFormattedCommentData(comment)

	return (
		<Stack key={comment.id} direction="row" spacing={2}>
			<Link href={`/channel/${channelId}/videos`}>
				<Avatar
					src={comment.snippet?.topLevelComment?.snippet?.authorProfileImageUrl || ''}
					sx={{ bgcolor: stringToColor(comment.snippet?.topLevelComment?.snippet?.authorDisplayName || '') }}
					alt={comment.snippet?.topLevelComment?.snippet?.authorDisplayName || ''}
				>
					{stringAvatar(comment.snippet?.topLevelComment?.snippet?.authorProfileImageUrl || '')}
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
					{comment.snippet?.topLevelComment?.snippet?.authorDisplayName || ''}
					<Typography component="span" fontSize={12} color="text.secondary" pl={1}>
						{timeAgo}
					</Typography>
				</MUILink>
				<Typography fontSize={14} fontWeight="300" mt={0.25} color="text.primary">
					{comment.snippet?.topLevelComment?.snippet?.textOriginal || ''}
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

'use client'

import { Box, Divider, Stack, Typography } from '@mui/material'
import { youtube_v3 } from 'googleapis'
import Comment from './Comment'

type Props = {
	totalResults: number
	comments: youtube_v3.Schema$CommentThread[]
}

const CommentsList = ({ totalResults, comments }: Props) => {
	return (
		<Stack spacing={2}>
			<Box>
				<Typography fontSize={16} lineHeight="16px">{`${totalResults} ${
					totalResults === 1 ? 'Comment' : 'Comments'
				}`}</Typography>
			</Box>
			<Divider />
			<Stack spacing={4}>
				{comments?.map((x) => (
					<Comment key={x.id} comment={x} />
				))}
			</Stack>
		</Stack>
	)
}

export default CommentsList

import { youtube_v3 } from 'googleapis'
import moment from 'moment'

const formatNumber = new Intl.NumberFormat('en', {
	notation: 'compact',
	compactDisplay: 'short',
	maximumSignificantDigits: 3,
}).format

export const getFormattedVideoData = (video: youtube_v3.Schema$Video) => {
	const videoId = typeof video.id === 'string' ? video.id : (video.id as unknown as { videoId: string }).videoId
	const timeAgo = moment(video.snippet?.publishedAt).fromNow()

	const viewCount = video.statistics?.viewCount
	const views =
		viewCount === '0'
			? 'No views'
			: `${formatNumber(parseInt(viewCount || '0'))} ${viewCount === '1' ? 'view' : 'views'}`

	const likeCount = video.statistics?.likeCount
	const likes = formatNumber(parseInt(likeCount || '0'))

	return {
		videoId,
		viewCount,
		views,
		timeAgo,
		likeCount,
		likes,
	}
}

export const getFormattedChannelData = (channel: youtube_v3.Schema$Channel) => {
	const channelName = channel?.snippet?.title || ''
	const subsCount = channel?.statistics?.subscriberCount
	const subs =
		subsCount === '0'
			? 'No views'
			: `${formatNumber(parseInt(subsCount || '0'))} ${subsCount === '1' ? 'subscriber' : 'subscribers'}`

	const videoCount = channel?.statistics?.videoCount
	const videos =
		subsCount === '0'
			? 'No views'
			: `${formatNumber(parseInt(videoCount || '0'))} ${videoCount === '1' ? 'video' : 'videos'}`

	return {
		channelName,
		subsCount,
		subs,
		videoCount,
		videos,
	}
}

export const getFormattedCommentData = (comment: youtube_v3.Schema$CommentThread) => {
	const likesCount = comment.snippet?.topLevelComment?.snippet?.likeCount || 0
	const likes = formatNumber(likesCount)
	const timeAgo = moment(comment.snippet?.topLevelComment?.snippet?.publishedAt).fromNow()

	return {
		likesCount,
		likes,
		timeAgo,
	}
}

export const getFormattedReplyData = (comment: youtube_v3.Schema$Comment) => {
	const likesCount = comment.snippet?.likeCount || 0
	const likes = formatNumber(likesCount)
	const timeAgo = moment(comment.snippet?.publishedAt).fromNow()

	return {
		likesCount,
		likes,
		timeAgo,
	}
}

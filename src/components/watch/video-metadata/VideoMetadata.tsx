import VideoMetadataCard from './VideoMetadataCard'
import { SITE_BASE_URL } from '@/config'
import { youtube_v3 } from 'googleapis'
import { Suspense } from 'react'
import VideoMetadataSkeleton from './VideoMetadataSkeleton'

type Props = {
	videoId: string
}

const getVideo = async (videoId: string) => {
	try {
		const res = await fetch(`${SITE_BASE_URL}/api/videos/${videoId}`)
		const data = (await res.json()) as youtube_v3.Schema$VideoListResponse
		return data.items?.[0] || null
	} catch (error) {
		return null
	}
}

const getChannel = async (channelId: string) => {
	try {
		const res = await fetch(`${SITE_BASE_URL}/api/channel/${channelId}`)
		const data = (await res.json()) as youtube_v3.Schema$ChannelListResponse
		return data.items?.[0] || null
	} catch (error) {
		return null
	}
}

const Component = async ({ videoId }: Props) => {
	await new Promise((resolve) => setTimeout(resolve, 1000))
	const video = await getVideo(videoId)
	const channel = video?.snippet?.channelId ? await getChannel(video.snippet.channelId) : null
	return video ? <VideoMetadataCard video={video} channel={channel} /> : <></>
}

const VideoMetadata = ({ videoId }: Props) => {
	return (
		<Suspense fallback={<VideoMetadataSkeleton />}>
			<Component videoId={videoId} />
		</Suspense>
	)
}

export default VideoMetadata

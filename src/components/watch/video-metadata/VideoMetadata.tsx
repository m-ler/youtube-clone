import VideoMetadataCard from './VideoMetadataCard'
import { SITE_BASE_URL } from '@/config'
import { youtube_v3 } from 'googleapis'
import { Suspense } from 'react'

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

const Component = async ({ videoId }: Props) => {
	const video = await getVideo(videoId)
	return video ? <VideoMetadataCard video={video} /> : <></>
}

const VideoMetadata = ({ videoId }: Props) => {
	return (
		<Suspense fallback="Loading...">
			<Component videoId={videoId} />
		</Suspense>
	)
}

export default VideoMetadata

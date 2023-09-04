import { SITE_BASE_URL } from '@/config'
import { youtube_v3 } from 'googleapis'
import { Suspense } from 'react'
import VideoListSkeleton from './VideoListSkeleton'
import VideoList from './VideoList'

export const revalidate = 60 * 60

const getVideos = async () => {
	try {
		const res = await fetch(`${SITE_BASE_URL}/api/videos`)
		const data = (await res.json()) as youtube_v3.Schema$VideoListResponse
		return data.items
	} catch (error) {
		return []
	}
}

const Component = async () => {
	const videos = await getVideos()
	return <VideoList videos={videos || []} dense />
}

const RelatedVideosList = () => {
	return (
		<Suspense fallback={<VideoListSkeleton />}>
			<Component />
		</Suspense>
	)
}

export default RelatedVideosList

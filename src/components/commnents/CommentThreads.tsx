import { SITE_BASE_URL } from '@/config'
import { youtube_v3 } from 'googleapis'
import { Suspense } from 'react'
import Loading from './Loading'
import CommentsList from './CommentsList'

type Props = {
	videoId: string
}

const getComments = async (videoId: string) => {
	try {
		const res = await fetch(`${SITE_BASE_URL}/api/comments/video/${videoId}`)
		const data = (await res.json()) as youtube_v3.Schema$CommentThreadListResponse
		return data || null
	} catch (error) {
		return null
	}
}

const Component = async ({ videoId }: Props) => {
	await new Promise((resolve) => setTimeout(resolve, 1000))
	const comments = await getComments(videoId)

	return <CommentsList totalResults={comments?.pageInfo?.totalResults || 0} comments={comments?.items || []} />
}

const CommentThreads = async ({ videoId }: Props) => {
	return (
		<Suspense fallback={<Loading />}>
			<Component videoId={videoId} />
		</Suspense>
	)
}

export default CommentThreads

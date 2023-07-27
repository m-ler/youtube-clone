import { youtubeClient } from '@/lib/googleapis/youtube-client'
import { NextResponse } from 'next/server'
export const revalidate = 60 * 60
export const dynamic = 'force-dynamic'

export const GET = async () => {
	const res = await youtubeClient.videos.list({
		part: ['snippet, contentDetails, statistics'],
		chart: 'mostPopular',
		regionCode: 'US',
		maxResults: 50,
	})

	return NextResponse.json(res.data)
}

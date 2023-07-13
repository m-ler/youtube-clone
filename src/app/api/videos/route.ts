import { youtubeClient } from '@/lib/googleapis/youtube-client'
import { NextResponse } from 'next/server'

export const GET = async () => {
	const res = await youtubeClient.videos.list({
		part: ['snippet,contentDetails,statistics'],
		chart: 'mostPopular',
		regionCode: 'US',
		maxResults: 50,
	})

	if (res && res.data) return NextResponse.json(res.data)

	return new NextResponse("Couldn't fetch feed.", {
		status: 500,
	})
}

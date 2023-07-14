import { youtubeClient } from '@/lib/googleapis/youtube-client'
import { NextResponse } from 'next/server'

export const GET = async () => {
	try {
		const res = await youtubeClient.videos.list({
			part: ['snippet, contentDetails, statistics'],
			chart: 'mostPopular',
			regionCode: 'US',
			maxResults: 50,
		})

		return NextResponse.json(res.data)
	} catch (e) {
		return new NextResponse("Couldn't fetch feed.", {
			status: 500,
		})
	}
}

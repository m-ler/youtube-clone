import { youtubeClient } from '@/lib/googleapis/youtube-client'
import { NextRequest, NextResponse } from 'next/server'

type Params = {
	params: {
		query: string
	}
}

export const GET = async (req: NextRequest, { params }: Params) => {
	const { query } = params

	if (!query) {
		return new NextResponse('Invalid search query.', {
			status: 400,
		})
	}

	try {
		const res = await youtubeClient.search.list({
			part: ['snippet'],
			maxResults: 50,
			q: query,
			type: ['video'],
		})

		return NextResponse.json(res.data)
	} catch (e) {
		return new NextResponse("Couldn't fetch results.", {
			status: 500,
		})
	}
}

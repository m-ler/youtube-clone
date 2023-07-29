import { youtubeAPIExeptionResponse } from '@/lib/exeptions/youtube-api-exeption-response'
import { youtubeClient } from '@/lib/googleapis/youtube-client'
import { NextRequest, NextResponse } from 'next/server'

type Params = {
	params: {
		id: string
	}
}

export const GET = async (req: NextRequest, { params }: Params) => {
	const { id } = params

	try {
		const res = await youtubeClient.channels.list({
			part: ['snippet,contentDetails,statistics,brandingSettings'],
			id: [id],
		})

		return NextResponse.json(res.data)
	} catch (error) {
		return youtubeAPIExeptionResponse(error)
	}
}

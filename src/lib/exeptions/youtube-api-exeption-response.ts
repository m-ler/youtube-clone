import { GaxiosError } from 'gaxios'
import { NextResponse } from 'next/server'

const DEFAULT_MESSAGE = 'There was an error with the Youtube API. Please try again.'

export const youtubeAPIExeptionResponse = (error: unknown) => {
	const message = (error as GaxiosError).message || DEFAULT_MESSAGE
	const status = (error as GaxiosError).response?.status || 500

	return new NextResponse(message, {
		status,
		statusText: message,
	})
}

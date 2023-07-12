import { YOUTUBE_API_KEY } from '@/config'
import { google } from 'googleapis'

export const youtubeClient = google.youtube({
	version: 'v3',
	auth: YOUTUBE_API_KEY,
})

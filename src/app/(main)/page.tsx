import Home from './Home'
import { youtubeClient } from '@/lib/googleapis/youtube-client'

export const revalidate = 60 * 60

const getFeed = async () => {
	try {
		const res = await youtubeClient.videos.list({
			part: ['snippet, contentDetails, statistics'],
			chart: 'mostPopular',
			regionCode: 'US',
			maxResults: 50,
		})

		return res.data.items
	} catch (e) {
		return []
	}
}

const Page = async () => {
	const videos = await getFeed()
	return <Home videos={videos || []} />
}

export default Page

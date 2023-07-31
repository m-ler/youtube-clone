import { SITE_BASE_URL } from '@/config'
import Home from './Home'
import { youtube_v3 } from 'googleapis'

const getFeed = async () => {
	const res = await fetch(`${SITE_BASE_URL}/api/videos`)
	if (res.ok) {
		try {
			const data = (await res.json()) as youtube_v3.Schema$VideoListResponse
			return data.items
		} catch (e) {
			return []
		}
	}

	throw new Error(res.statusText)
}

const Page = async () => {
	const videos = await getFeed()
	return <Home videos={videos || []} />
}

export default Page

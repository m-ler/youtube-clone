import { SITE_BASE_URL } from '@/config'
import { youtube_v3 } from 'googleapis'
import ChannelVideos from './ChannelVideos'

const getChannelVideos = async (channelId: string) => {
	const res = await fetch(`${SITE_BASE_URL}/api/videos/channel/${channelId}`)
	if (res.ok) {
		const data = (await res.json()) as youtube_v3.Schema$VideoListResponse
		return data.items || null
	}

	throw new Error(res.statusText)
}

type Props = {
	params: {
		id: string
	}
}
const Page = async ({ params }: Props) => {
	const { id } = params
	const channelVideos = await getChannelVideos(id)

	return <ChannelVideos videos={channelVideos || []} />
}

export default Page

import { SITE_BASE_URL } from '@/config'
import { youtube_v3 } from 'googleapis'
import About from './About'

const getChannel = async (channelId: string) => {
	try {
		const res = await fetch(`${SITE_BASE_URL}/api/channel/${channelId}`)
		const data = (await res.json()) as youtube_v3.Schema$ChannelListResponse
		return data.items?.[0] || null
	} catch (error) {
		return null
	}
}

type Props = {
	params: {
		id: string
	}
}

const Page = async ({ params }: Props) => {
	const channel = await getChannel(params.id)
	return <About channel={channel} />
}

export default Page

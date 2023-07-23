import { SITE_BASE_URL } from '@/config'
import Channel from './Channel'
import { youtube_v3 } from 'googleapis'

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
	return channel ? <Channel channel={channel} /> : <>Channel not found.</>
}

export default Page

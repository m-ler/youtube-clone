import { Suspense } from 'react'
import ChannelHeaderSkeleton from './ChannelHeaderSkeleton'
import ChannelHeaderCard from './ChannelHeaderCard'
import { SITE_BASE_URL } from '@/config'
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
	channelId: string
}

const Component = async ({ channelId }: Props) => {
	await new Promise((resolve) => setTimeout(resolve, 1000))
	const channel = await getChannel(channelId)
	return channel ? <ChannelHeaderCard channel={channel} /> : <>Channel not found.</>
}

const ChannelHeader = async ({ channelId }: Props) => {
	return (
		<Suspense fallback={<ChannelHeaderSkeleton />}>
			<Component channelId={channelId} />
		</Suspense>
	)
}

export default ChannelHeader

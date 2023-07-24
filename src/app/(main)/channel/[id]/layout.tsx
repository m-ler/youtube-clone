import { SITE_BASE_URL } from '@/config'
import ChannelLayout from './ChannelLayout'
import { youtube_v3 } from 'googleapis'
import { PropsWithChildren } from 'react'

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
} & PropsWithChildren

const Layout = async ({ params, children }: Props) => {
	const channel = await getChannel(params.id) 
	return channel ? <ChannelLayout channel={channel}>{children}</ChannelLayout> : <>Channel not found.</>
}

export default Layout

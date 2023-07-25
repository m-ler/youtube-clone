import ChannelHeader from '@/components/channel/ChannelHeader/ChannelHeader'
import ChannelLayout from './ChannelLayout'
import { PropsWithChildren } from 'react'

type Props = {
	params: {
		id: string
	}
} & PropsWithChildren

const Layout = ({ params, children }: Props) => {
	return <ChannelLayout channelHeader={<ChannelHeader channelId={params.id} />}>{children}</ChannelLayout>
}

export default Layout

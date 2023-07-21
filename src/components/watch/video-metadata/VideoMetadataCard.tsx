import { getFormattedChannelData, getFormattedVideoData } from '@/lib/utils/youtube'
import { Button, Stack, Typography } from '@mui/material'
import { youtube_v3 } from 'googleapis'
import { useMemo } from 'react'
import ActionButtons from './ActionButtons'
import ChannelAvatar from './ChannelAvatar'
import DescriptionBox from './DescriptionBox'

type Props = {
	video: youtube_v3.Schema$Video
	channel: youtube_v3.Schema$Channel | null
}

const VideoMetadataCard = ({ video, channel }: Props) => {
	const { likes, timeAgo } = useMemo(() => getFormattedVideoData(video), [video?.id])
	const { channelName, subs } = useMemo(() => getFormattedChannelData(channel || {}), [channel?.id])

	return (
		<Stack overflow="hidden" maxWidth="100%" spacing={1.5}>
			<Typography
				variant="h1"
				fontSize={20}
				fontWeight="600"
				overflow="hidden"
				sx={{ WebkitBoxOrient: 'vertical', display: '-webkit-box', WebkitLineClamp: 2 }}
			>
				{video.snippet?.title}
			</Typography>

			<Stack direction="row" flexWrap="wrap" gap={1.5}>
				<Stack direction="row" alignItems="center" mr="auto">
					<ChannelAvatar channel={channel} channelName={channelName} subs={subs} />
					<Button variant="contained" sx={{ borderRadius: '18px' }} disableElevation>
						Subscribe
					</Button>
				</Stack>

				<ActionButtons likes={likes} />
			</Stack>
			<DescriptionBox video={video} channel={channel} subs={subs} timeAgo={timeAgo} />
		</Stack>
	)
}

export default VideoMetadataCard

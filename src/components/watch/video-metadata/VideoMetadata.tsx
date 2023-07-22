import VideoMetadataCard from './VideoMetadataCard'
import { SITE_BASE_URL } from '@/config'
import { youtube_v3 } from 'googleapis'
import { Suspense } from 'react'
import VideoMetadataSkeleton from './VideoMetadataSkeleton'

type Props = {
	videoId: string
}

const getVideo = async (videoId: string) => {
	try {
		const res = await fetch(`${SITE_BASE_URL}/api/videos/${videoId}`)
		const data = (await res.json()) as youtube_v3.Schema$VideoListResponse
		return data.items?.[0] || null
	} catch (error) {
		return null
	}
}

const getChannel = async (channelId: string) => {
	try {
		const res = await fetch(`${SITE_BASE_URL}/api/channel/${channelId}`)
		const data = (await res.json()) as youtube_v3.Schema$ChannelListResponse
		return data.items?.[0] || null
	} catch (error) {
		return null
	}
}

const Component = async ({ videoId }: Props) => {
	await new Promise((resolve) => setTimeout(resolve, 1000))
	const video = videoMock.items?.[0] // await getVideo(videoId)
	const channel = channelMock.items?.[0] // video?.snippet?.channelId ? await getChannel(video.snippet.channelId) : null
	return video ? <VideoMetadataCard video={video} channel={channel} /> : <></>
}

const VideoMetadata = ({ videoId }: Props) => {
	return (
		<Suspense fallback={<VideoMetadataSkeleton />}>
			<Component videoId={videoId} />
		</Suspense>
	)
}

export default VideoMetadata

const channelMock = {
	kind: 'youtube#channelListResponse',
	etag: 'g2x0AZjz95xdnw8UAumRnNI2A-I',
	pageInfo: {
		totalResults: 1,
		resultsPerPage: 5,
	},
	items: [
		{
			kind: 'youtube#channel',
			etag: 'r3wVDYaJcm7j3-OqjRb70E77jVc',
			id: 'UCkrFeDQAnf-BTvRCrxQp-cw',
			snippet: {
				title: 'Elvis Duran Show',
				description:
					"Elvis Duran and the Morning Show brings you exclusive interviews and live music performances from today's top artists. Watch the nationally syndicated radio show: Weekdays, 6 AM - 10 AM ET on @iHeartRadio + tune-in 24/7 ON-DEMAND!",
				customUrl: '@elvisduranshow',
				publishedAt: '2013-05-29T02:48:39Z',
				thumbnails: {
					default: {
						url: 'https://yt3.ggpht.com/sIG-CyDxfcGtLc8xBSnNdnDZgk7Q3LbXn8gCKzPAHf-Fzi4I0-yYrdO8-nbUodxo3LPA6eEe=s88-c-k-c0x00ffffff-no-rj',
						width: 88,
						height: 88,
					},
					medium: {
						url: 'https://yt3.ggpht.com/sIG-CyDxfcGtLc8xBSnNdnDZgk7Q3LbXn8gCKzPAHf-Fzi4I0-yYrdO8-nbUodxo3LPA6eEe=s240-c-k-c0x00ffffff-no-rj',
						width: 240,
						height: 240,
					},
					high: {
						url: 'https://yt3.ggpht.com/sIG-CyDxfcGtLc8xBSnNdnDZgk7Q3LbXn8gCKzPAHf-Fzi4I0-yYrdO8-nbUodxo3LPA6eEe=s800-c-k-c0x00ffffff-no-rj',
						width: 800,
						height: 800,
					},
				},
				localized: {
					title: 'Elvis Duran Show',
					description:
						"Elvis Duran and the Morning Show brings you exclusive interviews and live music performances from today's top artists. Watch the nationally syndicated radio show: Weekdays, 6 AM - 10 AM ET on @iHeartRadio + tune-in 24/7 ON-DEMAND!",
				},
				country: 'US',
			},
			contentDetails: {
				relatedPlaylists: {
					likes: '',
					uploads: 'UUkrFeDQAnf-BTvRCrxQp-cw',
				},
			},
			statistics: {
				viewCount: '105130627',
				subscriberCount: '257000',
				hiddenSubscriberCount: false,
				videoCount: '2829',
			},
		},
	],
}

const videoMock = {
	kind: 'youtube#videoListResponse',
	etag: 'xBhO0ftggCZbEoQ_sPfdC1Oe2Hk',
	items: [
		{
			kind: 'youtube#video',
			etag: 'y6NoAQpt8FAi8yTFF0FZef4RD28',
			id: '0mA9PQNI3mg',
			snippet: {
				publishedAt: '2023-07-19T15:21:13Z',
				channelId: 'UCkrFeDQAnf-BTvRCrxQp-cw',
				title: 'Jung Kook On "Seven" And Performing On The Moon | Elvis Duran Show',
				description:
					'Jung Kook\'s new single "Seven" featuring Latto is out now!\n\n► Listen LIVE: http://elvisduran.com/\n► TikTok: https://www.tiktok.com/@elvisduranshow\n► Instagram: https://www.instagram.com/elvisduranshow/\n► Facebook: https://www.facebook.com/elvisduran/\n► Twitter: https://twitter.com/elvisduranshow/\n► Subscribe now: http://bit.ly/2WuYnQe\n\nYou can listen to Elvis Duran and the Morning Show weekday mornings from 6-10AM ET or on the iHeartRadio app at anytime, we\'re not picky.\n\nBroadcasting live from New York\'s Z100, Elvis Duran and his on-air crew, including Danielle Monaro and Gandhi, entertain listeners with up-to-the-minute entertainment and pop culture news, celebrity guests, hit songs, and regular features such as the gossipy "Entertainment News," and ever-popular prank "Phone Taps” -- all of which have made Elvis Duran and the Morning Show the most-listened-to Top 40 morning show in the U.S.',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/0mA9PQNI3mg/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/0mA9PQNI3mg/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/0mA9PQNI3mg/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/0mA9PQNI3mg/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/0mA9PQNI3mg/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'Elvis Duran Show',
				tags: [
					'elvis duran',
					'elvis duran and the morning show',
					'elvis duran show',
					'morning show',
					'radio',
					'morning radio',
					'jung kook',
					'bts',
					'bts army',
					'army',
				],
				categoryId: '24',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Jung Kook On "Seven" And Performing On The Moon | Elvis Duran Show',
					description:
						'Jung Kook\'s new single "Seven" featuring Latto is out now!\n\n► Listen LIVE: http://elvisduran.com/\n► TikTok: https://www.tiktok.com/@elvisduranshow\n► Instagram: https://www.instagram.com/elvisduranshow/\n► Facebook: https://www.facebook.com/elvisduran/\n► Twitter: https://twitter.com/elvisduranshow/\n► Subscribe now: http://bit.ly/2WuYnQe\n\nYou can listen to Elvis Duran and the Morning Show weekday mornings from 6-10AM ET or on the iHeartRadio app at anytime, we\'re not picky.\n\nBroadcasting live from New York\'s Z100, Elvis Duran and his on-air crew, including Danielle Monaro and Gandhi, entertain listeners with up-to-the-minute entertainment and pop culture news, celebrity guests, hit songs, and regular features such as the gossipy "Entertainment News," and ever-popular prank "Phone Taps” -- all of which have made Elvis Duran and the Morning Show the most-listened-to Top 40 morning show in the U.S.',
				},
				defaultAudioLanguage: 'en',
			},
			contentDetails: {
				duration: 'PT5M9S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '190059',
				likeCount: '34054',
				favoriteCount: '0',
				commentCount: '1514',
			},
		},
	],
	pageInfo: {
		totalResults: 1,
		resultsPerPage: 1,
	},
}

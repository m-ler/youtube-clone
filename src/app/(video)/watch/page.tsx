import Watch from './Watch'
import CommentThreads from '@/components/commnents/CommentThreads'
import VideoMetadata from '@/components/watch/video-metadata'

type Props = {
	searchParams: { [key: string]: string | string[] | undefined }
}

const Page = ({ searchParams }: Props) => {
	const videoId = (searchParams['v'] || '') as string
	return (
		<Watch
			videoId={videoId}
			videoMetadata={<VideoMetadata videoId={videoId} />}
			comments={<CommentThreads videoId={videoId} />}
		/>
	)
}

export default Page

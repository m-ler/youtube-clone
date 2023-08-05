import Watch from './Watch'
import CommentThreads from '@/components/commnents/CommentThreads'
import VideoMetadata from '@/components/watch/video-metadata'

type Props = {
	params: {
		id: string
	}
}

const Page = ({ params }: Props) => {
	const videoId = params.id
	
	return (
		<Watch
			videoId={videoId}
			videoMetadata={<VideoMetadata videoId={videoId} />}
			comments={<CommentThreads videoId={videoId} />}
		/>
	)
}

export default Page

import Watch from './Watch'

type Props = {
	searchParams: { [key: string]: string | string[] | undefined }
}

const Page = ({ searchParams }: Props) => {
	const videoId = (searchParams['v'] || '') as string
	return <Watch videoId={videoId} />
}

export default Page

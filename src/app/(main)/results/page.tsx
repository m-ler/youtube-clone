import { Metadata } from 'next'
import Results from './Results'

type Props = {
	searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
	const query = (searchParams['search_query'] || '') as string
	return {
		title: query ? `${query} - Youtube` : 'Youtube',
	}
}

const Page = async () => {
	return <Results />
}

export default Page

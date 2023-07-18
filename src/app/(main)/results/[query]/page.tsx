import { Metadata } from 'next'
import Results from './Results'
import { SITE_BASE_URL } from '@/config'
import { youtube_v3 } from 'googleapis'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const query = params.query || ''
	console.log(params)

	return {
		title: query ? `${decodeURIComponent(query)} - Youtube` : 'Youtube',
	}
}

const getResults = async (query: string) => {
	try {
		const res = await fetch(`${SITE_BASE_URL}/api/search/${query}`)
		const data = (await res.json()) as youtube_v3.Schema$VideoListResponse
		return data.items
	} catch (error) {
		return []
	}
}

type Props = {
	params: {
		query: string
	}
}

const Page = async ({ params }: Props) => {
	const searchQuery = params.query || ''
	const results = await getResults(searchQuery)

	return <Results results={results || []} />
}

export default Page

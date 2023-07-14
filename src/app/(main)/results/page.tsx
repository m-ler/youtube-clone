import { SITE_BASE_URL } from '@/config'
import { youtube_v3 } from 'googleapis'
import Results from './Results'

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
	searchParams: { [key: string]: string | string[] | undefined }
}

const Page = async ({ searchParams }: Props) => {
	const query = (searchParams.search_query as string) || ''

	const resuls = await getResults(query)
	return <Results videos={resuls || []} />
}

export default Page

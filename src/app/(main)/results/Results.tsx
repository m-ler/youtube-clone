'use client'

import VideoList from '@/components/videos/VideoList'
import VideoListSkeleton from '@/components/videos/VideoListSkeleton'
import { SITE_BASE_URL } from '@/config'
import { Container } from '@mui/material'
import { youtube_v3 } from 'googleapis'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useMutation } from 'react-query'

const getResults = async (query: string) => {
	try {
		const res = await fetch(`${SITE_BASE_URL}/api/search/${query}`)
		const data = (await res.json()) as youtube_v3.Schema$VideoListResponse
		return data.items
	} catch (error) {
		return []
	}
}

const Results = () => {
	const query = useSearchParams().get('search_query')
	const resultsMutation = useMutation(() => getResults(query || ''))

	useEffect(() => {
		if (query) resultsMutation.mutate()
	}, [query])

	return (
		<Container maxWidth="lg" sx={{ pt: 1.5, '&': { px: 3 } }}>
			{resultsMutation.isLoading ? <VideoListSkeleton /> : <VideoList videos={resultsMutation.data || []} />}
		</Container>
	)
}

export default Results

'use client'

import { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()
const Providers = ({ children }: PropsWithChildren) => {
	return (
		<>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</>
	)
}

export default Providers

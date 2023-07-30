'use client'

import ThemeProvider from '@/lib/mui/ThemeProvider'
import { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()
const Providers = ({ children }: PropsWithChildren) => {
	return (
		<ThemeProvider>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</ThemeProvider>
	)
}

export default Providers

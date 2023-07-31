'use client'

import ThemeProvider from '@/lib/mui/ThemeProvider'
import { PropsWithChildren } from 'react'
const Providers = ({ children }: PropsWithChildren) => {
	return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers

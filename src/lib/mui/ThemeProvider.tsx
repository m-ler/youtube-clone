'use client'

import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { PropsWithChildren } from 'react'
import { NextAppDirEmotionCacheProvider } from './EmotionCache'

const ThemeProvider = ({ children }: PropsWithChildren) => {
	return (
		<NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
			<MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
		</NextAppDirEmotionCacheProvider>
	)
}

export default ThemeProvider

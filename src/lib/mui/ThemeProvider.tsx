'use client'

import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { theme, darkTheme } from './theme'
import { PropsWithChildren } from 'react'
import { NextAppDirEmotionCacheProvider } from './EmotionCache'
import { colorModeState } from '@/store/colorMode'
import { CssBaseline } from '@mui/material'
import { isDefaultDarkMode } from '../utils/device'

const ThemeProvider = ({ children }: PropsWithChildren) => {
	const colorMode = colorModeState((state) => state.value)
	const colorModeValue = colorMode === 'device' ? isDefaultDarkMode() ? 'dark' : 'light' : colorMode

	return (
		<NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
			<MUIThemeProvider theme={colorModeValue === 'dark' ? darkTheme : theme}>
				<CssBaseline enableColorScheme />
				{children}
			</MUIThemeProvider>
			;
		</NextAppDirEmotionCacheProvider>
	)
}

export default ThemeProvider

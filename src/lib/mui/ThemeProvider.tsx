'use client'

import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { theme, darkTheme } from './theme'
import { PropsWithChildren, useEffect, useState } from 'react'
import { NextAppDirEmotionCacheProvider } from './EmotionCache'
import { colorModeState } from '@/store/colorMode'
import CssBaseline from '@mui/material/CssBaseline'
import { isDefaultDarkMode } from '../utils/device'

const ThemeProvider = ({ children }: PropsWithChildren) => {
	const colorMode = colorModeState((state) => state.value)
	const [colorModeValue, setColorModeValue] = useState('light')
	useEffect(() => {
		const mode = colorMode === 'device' ? (isDefaultDarkMode() ? 'dark' : 'light') : colorMode
		setColorModeValue(mode)
		document.body.classList.toggle('dark', mode === 'dark')
	}, [colorMode])

	return (
		<NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
			<MUIThemeProvider theme={colorModeValue === 'dark' ? darkTheme : theme}>
				<CssBaseline enableColorScheme />
				{children}
			</MUIThemeProvider>
		</NextAppDirEmotionCacheProvider>
	)
}

export default ThemeProvider

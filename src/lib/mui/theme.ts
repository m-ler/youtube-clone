import { ThemeOptions, createTheme } from '@mui/material'
import { Roboto_Flex } from 'next/font/google'

const roboto = Roboto_Flex({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		'2xl': true
	}
}

const baseTheme: ThemeOptions = {
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
	components: {
		MuiTooltip: {
			styleOverrides: {
				tooltip: {
					padding: 8,
					fontSize: 12,
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
				},
			},
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
			'2xl': 2256,
		},
	},
}

export const theme = createTheme({ ...baseTheme })
export const darkTheme = createTheme({
	...baseTheme,
	palette: { mode: 'dark', background: { default: '#0f0f0f', paper: '#0f0f0f' }, ...baseTheme.palette },
})

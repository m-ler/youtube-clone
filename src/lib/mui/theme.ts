import { createTheme } from '@mui/material'
import { Roboto_Flex } from 'next/font/google'

const roboto = Roboto_Flex({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		'2xl': true
	}
}

const theme = createTheme({
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
})

export default theme

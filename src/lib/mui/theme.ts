import { createTheme } from '@mui/material';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] });

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
});

export default theme;

import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { PropsWithChildren } from 'react';

const ThemeProvider = ({ children }: PropsWithChildren) => {
	return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};

export default ThemeProvider;

import Header from '@/components/header/Header';
import ThemeProvider from '@/lib/mui/ThemeProvider';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<ThemeProvider>
			<Header />
			{children}
		</ThemeProvider>
	);
};

export default Layout;

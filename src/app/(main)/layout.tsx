import Header from '@/components/header/Header';
import NavDrawerManager from '@/components/nav-drawers/NavDrawerManager';
import ThemeProvider from '@/lib/mui/ThemeProvider';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<ThemeProvider>
			<Header />
			<NavDrawerManager />
			{children}
		</ThemeProvider>
	);
};

export default Layout;

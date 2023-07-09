import Header from '@/components/header/Header';
import NavDrawer from '@/components/nav-drawers/NavDrawer';
import ThemeProvider from '@/lib/mui/ThemeProvider';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<ThemeProvider>
			<Header />
			<NavDrawer />
			{children}
		</ThemeProvider>
	);
};

export default Layout;

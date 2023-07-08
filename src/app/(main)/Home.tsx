'use client';

import Header from '@/components/header/Header';
import ThemeProvider from '@/lib/mui/ThemeProvider';

const Home = () => {
	return (
		<ThemeProvider>
			<Header />
		</ThemeProvider>
	);
};

export default Home;

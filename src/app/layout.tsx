import { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Youtube',
	description: 'Youtube web clone with Next.js',
};

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
};

export default RootLayout;

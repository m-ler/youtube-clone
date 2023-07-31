import { PropsWithChildren } from 'react'
import { Roboto_Flex } from 'next/font/google'
import './globals.css'
import Providers from '@/config/Providers'

const roboto = Roboto_Flex({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })

export const metadata = {
	title: 'Youtube',
	description: 'Youtube web clone with Next.js',
	openGraph: {
		title: 'Youtube',
		type: 'website',
		siteName: 'Youtube clone',
		description: 'Youtube web clone created with Next.js',
		images: [
			{
				url: '/img/youtube-logo.png',
				width: 512,
				height: 512,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Youtube',
		description: 'Youtube web clone created with Next.js',
		images: ['/img/youtube-logo.png'],
	},
}

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<Providers>
				<body className={roboto.className} style={{ margin: 0, minWidth: 320 }}>
					{children}
				</body>
			</Providers>
		</html>
	)
}

export default RootLayout

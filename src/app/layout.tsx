import { PropsWithChildren } from 'react'
import { Roboto_Flex } from 'next/font/google'
import './globals.css'

const roboto = Roboto_Flex({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })

export const metadata = {
	title: 'Youtube',
	description: 'Youtube web clone with Next.js',
}

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<body className={roboto.className} style={{ margin: 0 }}>
				{children}
			</body>
		</html>
	)
}

export default RootLayout

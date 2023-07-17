import Header from '@/components/header/Header'
import NavigationManager from '@/components/navigation/NavigationManager'
import ThemeProvider from '@/lib/mui/ThemeProvider'
import { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<ThemeProvider>
			<Header />
			<NavigationManager floatingOnly />
			{children}
		</ThemeProvider>
	)
}

export default Layout

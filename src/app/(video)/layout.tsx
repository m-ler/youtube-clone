import MainLayout from '@/components/MainLayout'
import Header from '@/components/header/Header'
import NavigationManager from '@/components/navigation/NavigationManager'
import ThemeProvider from '@/lib/mui/ThemeProvider'
import { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<ThemeProvider>
			<Header />
			<NavigationManager />
			<MainLayout>{children}</MainLayout>
		</ThemeProvider>
	)
}

export default Layout

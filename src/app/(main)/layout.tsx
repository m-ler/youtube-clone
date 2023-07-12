import Header from '@/components/header/Header'
import NavigationManager from '@/components/navigation/NavigationManager'
import ThemeProvider from '@/lib/mui/ThemeProvider'
import { PropsWithChildren } from 'react'
import MainLayout from './MainLayout'

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

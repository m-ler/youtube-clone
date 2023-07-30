import Header from '@/components/header/Header'
import NavigationManager from '@/components/navigation/NavigationManager'
import { PropsWithChildren } from 'react'
import MainLayout from './MainLayout'

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			<NavigationManager />
			<MainLayout>{children}</MainLayout>
		</>
	)
}

export default Layout

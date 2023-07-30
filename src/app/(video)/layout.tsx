import Header from '@/components/header/Header'
import NavigationManager from '@/components/navigation/NavigationManager'
import { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			<NavigationManager floatingOnly />
			{children}
		</>
	)
}

export default Layout

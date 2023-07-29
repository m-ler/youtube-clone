import { ReactNode } from 'react'

export type NavItem = {
	name: string
	href: string
	icon: ReactNode
	selectedIcon: ReactNode
}

export type Appearance = 'device' | 'dark' | 'light'

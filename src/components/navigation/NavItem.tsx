import { NavItem } from '@/types'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
	item: NavItem
}

const NavItem = ({ item }: Props) => {
	const selected = usePathname().startsWith(item.href)

	return (
		<ListItem disablePadding>
			<ListItemButton selected={selected} href={item.href} component={Link}>
				<ListItemIcon sx={{ color: 'text.primary' }}>{selected ? item.selectedIcon : item.icon}</ListItemIcon>
				<ListItemText primary={item.name} />
			</ListItemButton>
		</ListItem>
	)
}

export default NavItem

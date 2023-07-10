import { navDrawerState } from '@/store/nav-drawer';
import { Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const NavMenuButton = () => {
	const { setFloating, setCollapsed } = navDrawerState(state => state);

	return (
		<IconButton size="medium" color="default" aria-label="menu" sx={{ mr: 2 }}>
			<Menu />
		</IconButton>
	);
};

export default NavMenuButton;

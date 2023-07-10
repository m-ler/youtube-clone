import CollapsedNavDrawer from './CollapsedNavDrawer';
import FloatingNavDrawer from './FloatingNavDrawer';
import NavDrawer from './NavDrawer';

const NavDrawerManager = () => {
	return (
		<>
			<NavDrawer />
			<CollapsedNavDrawer />
			<FloatingNavDrawer />
		</>
	);
};

export default NavDrawerManager;

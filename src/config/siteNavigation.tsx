import YoutubeIcon from '@/assets/svgr/YoutubeIcon'
import YoutubeKids from '@/assets/svgr/YoutubeKids'
import YoutubeMusic from '@/assets/svgr/YoutubeMusic'
import { NavItem } from '@/types'
import {
	AddCircle,
	AddCircleOutline,
	EmojiEvents,
	EmojiEventsOutlined,
	Feedback,
	FeedbackOutlined,
	Flag,
	FlagOutlined,
	HelpOutline,
	HelpOutlineOutlined,
	Home,
	HomeOutlined,
	Lightbulb,
	LightbulbOutlined,
	LocalFireDepartment,
	LocalFireDepartmentOutlined,
	MusicNote,
	MusicNoteOutlined,
	Newspaper,
	NewspaperOutlined,
	OfflineBolt,
	OfflineBoltOutlined,
	Restore,
	RestoreOutlined,
	Sensors,
	SensorsOutlined,
	Settings,
	SettingsOutlined,
	Subscriptions,
	SubscriptionsOutlined,
	VideoLibrary,
	VideoLibraryOutlined,
	VideogameAsset,
	VideogameAssetOutlined,
} from '@mui/icons-material'

export const mainNavigation = {
	main: [
		{
			name: 'Home',
			href: '/',
			icon: <HomeOutlined />,
			selectedIcon: <Home />,
		},
		{
			name: 'Shorts',
			href: '#',
			icon: <OfflineBoltOutlined />,
			selectedIcon: <OfflineBolt />,
		},
		{
			name: 'Subscriptions',
			href: '#',
			icon: <SubscriptionsOutlined />,
			selectedIcon: <Subscriptions />,
		},
	] as NavItem[],
	user: [
		{
			name: 'Library',
			href: '#',
			icon: <VideoLibraryOutlined />,
			selectedIcon: <VideoLibrary />,
		},
		{
			name: 'History',
			href: '#',
			icon: <RestoreOutlined />,
			selectedIcon: <Restore />,
		},
	] as NavItem[],
	explore: [
		{
			name: 'Trending',
			href: '#',
			icon: <LocalFireDepartmentOutlined />,
			selectedIcon: <LocalFireDepartment />,
		},
		{
			name: 'Music',
			href: '#',
			icon: <MusicNoteOutlined />,
			selectedIcon: <MusicNote />,
		},
		{
			name: 'Live',
			href: '#',
			icon: <SensorsOutlined />,
			selectedIcon: <Sensors />,
		},
		{
			name: 'Gaming',
			href: '#',
			icon: <VideogameAssetOutlined />,
			selectedIcon: <VideogameAsset />,
		},
		{
			name: 'News',
			href: '#',
			icon: <NewspaperOutlined />,
			selectedIcon: <Newspaper />,
		},
		{
			name: 'Sports',
			href: '#',
			icon: <EmojiEventsOutlined />,
			selectedIcon: <EmojiEvents />,
		},
		{
			name: 'Learning',
			href: '#',
			icon: <LightbulbOutlined />,
			selectedIcon: <Lightbulb />,
		},
	] as NavItem[],
	browse: [
		{
			name: 'Browser channels',
			href: '#',
			icon: <AddCircleOutline />,
			selectedIcon: <AddCircle />,
		},
	] as NavItem[],
	more: [
		{
			name: 'YouTube Premium',
			href: 'https://www.youtube.com/premium',
			icon: <YoutubeIcon width={24} />,
			selectedIcon: <YoutubeIcon width={24} />,
		},
		{
			name: 'YouTube Music',
			href: 'https://music.youtube.com',
			icon: <YoutubeMusic width={24} />,
			selectedIcon: <YoutubeMusic width={24} />,
		},
		{
			name: 'YouTube Kids',
			href: 'https://www.youtubekids.com',
			icon: <YoutubeKids width={24} />,
			selectedIcon: <YoutubeKids width={24} />,
		},
	] as NavItem[],
	support: [
		{
			name: 'Settings',
			href: '#',
			icon: <SettingsOutlined />,
			selectedIcon: <Settings />,
		},
		{
			name: 'Report history',
			href: '#',
			icon: <FlagOutlined />,
			selectedIcon: <Flag />,
		},
		{
			name: 'Help',
			href: '#',
			icon: <HelpOutlineOutlined />,
			selectedIcon: <HelpOutline />,
		},
		{
			name: 'Send feedback',
			href: '#',
			icon: <FeedbackOutlined />,
			selectedIcon: <Feedback />,
		},
	] as NavItem[],
}

export const collapsedNavigation = [
	{
		name: 'Home',
		href: '/',
		icon: <HomeOutlined />,
		selectedIcon: <Home />,
	},
	{
		name: 'Shorts',
		href: '#',
		icon: <OfflineBoltOutlined />,
		selectedIcon: <OfflineBolt />,
	},
	{
		name: 'Subscriptions',
		href: '#',
		icon: <SubscriptionsOutlined />,
		selectedIcon: <Subscriptions />,
	},
	{
		name: 'Library',
		href: '#',
		icon: <VideoLibraryOutlined />,
		selectedIcon: <VideoLibrary />,
	},
] as NavItem[]

type FooterNavItem = {
	name: string
	href: string
}

export const footerNavigation = {
	primary: [
		{
			name: 'About',
			href: 'https://about.youtube/',
		},
		{
			name: 'Press',
			href: 'https://blog.youtube/',
		},
		{
			name: 'Copyright',
			href: 'https://www.youtube.com/howyoutubeworks/policies/copyright/',
		},
		{
			name: 'Contact us',
			href: 'https://www.youtube.com/t/contact_us/',
		},
		{
			name: 'Creators',
			href: 'https://www.youtube.com/creators/',
		},
		{
			name: 'Advertise',
			href: 'https://www.youtube.com/ads/',
		},
		{
			name: 'Developers',
			href: 'https://developers.google.com/youtube',
		},
	] as FooterNavItem[],
	secondary: [
		{
			name: 'Terms',
			href: 'https://www.youtube.com/t/terms',
		},
		{
			name: 'Privacy',
			href: 'https://policies.google.com/privacy?hl=en',
		},
		{
			name: 'Policy & Safety',
			href: 'https://www.youtube.com/howyoutubeworks/policies/community-guidelines/',
		},
		{
			name: 'How YouTube works',
			href: 'https://www.youtube.com/howyoutubeworks/?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen',
		},
		{
			name: 'Test new features',
			href: 'https://www.youtube.com/new',
		},
	] as FooterNavItem[],
}

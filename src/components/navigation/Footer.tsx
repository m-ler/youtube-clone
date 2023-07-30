import { footerNavigation } from '@/config/siteNavigation'
import { Link as MUILink, Stack, Typography } from '@mui/material'
import Link from 'next/link'

const currentYear = new Date().getFullYear()

const Footer = () => {
	return (
		<Stack maxWidth="100%" py={2}>
			<Stack px={3} direction="row" flexWrap="wrap" columnGap={1} rowGap={0.5}>
				{footerNavigation.primary.map((x) => (
					<MUILink
						key={x.name}
						component={Link}
						href={x.href}
						sx={{ textDecoration: 'none', fontSize: 13, color: 'text.secondary', fontWeight: '500' }}
					>
						{x.name}
					</MUILink>
				))}
			</Stack>
			<Stack pl={3} direction="row" flexWrap="wrap" columnGap={1} rowGap={0.5} mt={2}>
				{footerNavigation.secondary.map((x) => (
					<MUILink
						key={x.name}
						component={Link}
						href={x.href}
						sx={{ textDecoration: 'none', fontSize: 13, color: 'text.secondary', fontWeight: '500' }}
					>
						{x.name}
					</MUILink>
				))}
			</Stack>
			<Typography
				fontSize={12}
				sx={{ color: 'text.disabled' }}
				px={3}
				pt={2}
			>{`© ${currentYear} YouTube Clone`}</Typography>
		</Stack>
	)
}

export default Footer

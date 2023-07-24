import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { grey } from '@mui/material/colors'

type Props = {
	direction: 'left' | 'right'
	onClick: () => void
}

const ScrollButton = ({ direction, onClick }: Props) => {
	return (
		<IconButton
			sx={{ bgcolor: 'white', boxShadow: '0px 4px 8px rgba(0,0,0,0.35)', '&:hover': { bgcolor: grey[100] } }}
			onClick={onClick}
		>
			{direction === 'left' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
		</IconButton>
	)
}

export default ScrollButton

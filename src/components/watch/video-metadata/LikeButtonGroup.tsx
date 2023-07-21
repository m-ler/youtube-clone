import { ThumbDownOutlined, ThumbUpOutlined } from '@mui/icons-material'
import { Button, ButtonGroup, Divider, Tooltip, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

type Props = {
	likes: string
}

const LikeButtonGroup = ({ likes }: Props) => {
	return (
		<ButtonGroup
			disableElevation
			variant="outlined"
			sx={{
				minHeight: '36px',
				'& .MuiButtonBase-root': {
					'&:hover': {
						border: 'none',
					},
					border: 'none',
					color: grey[800],
					bgcolor: grey[200],
					'&:nth-of-type(1)': {
						borderRadius: '18px 0px 0px 18px',
					},
					'&:nth-of-type(2)': {
						borderRadius: '0px 18px 18px 0px',
					},
				},
			}}
		>
			<Tooltip title="I like this">
				<Button>
					<ThumbUpOutlined fontSize="small" />
					<Typography component="span" ml={1} fontSize={14} fontWeight="500">
						{likes}
					</Typography>
				</Button>
			</Tooltip>
			<Divider sx={{ width: '1px', backgroundColor: grey[400], my: '5%', zIndex: 1 }} />
			<Tooltip title="I dislike this">
				<Button>
					<ThumbDownOutlined fontSize="small" />
				</Button>
			</Tooltip>
		</ButtonGroup>
	)
}

export default LikeButtonGroup

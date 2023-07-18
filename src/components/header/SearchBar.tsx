import { Close, Mic, Search } from '@mui/icons-material'
import { Box, Button, IconButton, InputBase, Tooltip, Stack } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useParams, useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

const SearchBar = () => {
	const router = useRouter()
	const params = useParams()
	const [value, setValue] = useState(params.query ? decodeURIComponent(params.query as string) : '')

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const searchQuery = value.trim()
		if (searchQuery) router.push(`/results/${searchQuery}`)
	}

	return (
		<Box component="form" display="flex" flexDirection="row" flexGrow={1} mx="auto" width="100%" onSubmit={onSubmit}>
			<Stack direction="row" border="1px solid" borderColor={grey[300]} borderRadius="40px 0px 0px 40px" flexGrow={1}>
				<InputBase
					sx={{ pl: 2, width: '100%', height: '100%' }}
					placeholder="Search"
					inputProps={{ 'aria-label': 'search' }}
					value={value}
					spellCheck="false"
					onChange={(e) => setValue(e.target.value)}
				/>
				<IconButton onClick={() => setValue('')} sx={{ display: value ? 'inline-flex' : 'none' }}>
					<Close />
				</IconButton>
			</Stack>
			<Button
				type="submit"
				color="inherit"
				sx={{
					bgcolor: grey[100],
					borderRadius: '0px 14px 14px 0px',
					border: '1px solid',
					borderLeftWidth: 0,
					borderColor: grey[300],
				}}
				aria-label="search button"
			>
				<Search sx={{ color: grey[500], fontSize: 26 }} />
			</Button>

			<Tooltip title="Search with your voice">
				<IconButton aria-label="voice search" sx={{ ml: 1 }}>
					<Mic sx={{ color: grey[900] }} />
				</IconButton>
			</Tooltip>
		</Box>
	)
}

export default SearchBar

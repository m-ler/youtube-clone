import { Close, Mic, Search } from '@mui/icons-material'
import { Box, Button, IconButton, InputBase, Tooltip, Stack } from '@mui/material'
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
			<Stack
				direction="row"
				border="1px solid"
				borderColor="action.focus"
				borderRadius="40px 0px 0px 40px"
				flexGrow={1}
			>
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
					bgcolor: 'action.hover',
					borderRadius: '0px 14px 14px 0px',
					border: '1px solid',
					borderLeftWidth: 0,
					borderColor: 'action.focus',
				}}
				aria-label="search button"
			>
				<Search sx={{ color: 'text.disabled', fontSize: 26 }} />
			</Button>

			<Tooltip title="Search with your voice">
				<IconButton aria-label="voice search" sx={{ ml: 2, bgcolor: 'action.hover' }}>
					<Mic sx={{ color: 'text.primary' }} />
				</IconButton>
			</Tooltip>
		</Box>
	)
}

export default SearchBar

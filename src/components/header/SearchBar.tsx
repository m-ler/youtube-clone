import { Mic, Search } from '@mui/icons-material';
import { Box, Button, IconButton, InputBase, Tooltip } from '@mui/material';
import { grey } from '@mui/material/colors';

const SearchBar = () => {
	return (
		<Box display="flex" flexDirection="row" flexGrow={1} mx="auto" maxWidth={640}>
			<Box border="1px solid" borderColor={grey[300]} borderRadius="40px 0px 0px 40px" flexGrow={1}>
				<InputBase sx={{ px: 2, width: '100%', height: '100%' }} placeholder="Search" inputProps={{ 'aria-label': 'search' }} />
			</Box>
			<Button
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
	);
};

export default SearchBar;

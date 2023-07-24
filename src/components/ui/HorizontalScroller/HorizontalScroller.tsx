import { Box, Stack } from '@mui/material'
import { ReactNode, useRef } from 'react'
import ScrollButton from './ScrollButton'

type Props = {
	elements: ReactNode[]
	spacing?: number
	scrollSpeed: number
}

const HorizontalScroller = ({ elements, spacing, scrollSpeed }: Props) => {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const leftButtonRef = useRef<HTMLDivElement | null>(null)
	const rightButtonRef = useRef<HTMLDivElement | null>(null)

	const scroll = (direction: 'left' | 'right') => {
		if (!containerRef.current) return
		const scrollValue = direction === 'left' ? -scrollSpeed : scrollSpeed
		const newScrollValue = containerRef.current.scrollLeft + scrollValue

		containerRef.current.scroll({
			top: 0,
			left: newScrollValue,
			behavior: 'smooth',
		})

		const scrollWidth = containerRef.current.scrollWidth - containerRef.current.clientWidth
		const newPosition = newScrollValue <= 0 ? 'start' : newScrollValue >= scrollWidth ? 'end' : null
		if (leftButtonRef.current) leftButtonRef.current.style.display = newPosition === 'start' ? 'none' : 'block'
		if (rightButtonRef.current) rightButtonRef.current.style.display = newPosition === 'end' ? 'none' : 'block'
	}

	return (
		<Box position="relative" width="100%">
			<Box position="absolute" top="50%" sx={{ translate: '-50% -50%' }} ref={leftButtonRef} display="none">
				<ScrollButton direction="left" onClick={() => scroll('left')} />
			</Box>
			<Box position="absolute" top="50%" right="0" sx={{ translate: '50% -50%' }} ref={rightButtonRef}>
				<ScrollButton direction="right" onClick={() => scroll('right')} />
			</Box>
			<Stack
				width="100%"
				direction="row"
				overflow="auto"
				gap={spacing || 0}
				ref={containerRef}
				sx={{ '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none' }}
			>
				{elements}
			</Stack>
		</Box>
	)
}

export default HorizontalScroller

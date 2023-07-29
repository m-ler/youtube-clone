import { Appearance } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ColorModeState = {
	value: Appearance
	setColorMode: (value: Appearance) => void
}

export const colorModeState = create<ColorModeState>()(
	persist(
		(set) => ({
			value: 'device',
			setColorMode: (value) => set({ value }),
		}),
		{
			name: 'app-appearance',
		}
	)
)

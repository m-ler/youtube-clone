export const isDefaultDarkMode = () =>
	typeof window !== 'undefined' ? window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches : false

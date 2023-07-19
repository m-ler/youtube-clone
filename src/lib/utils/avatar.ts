export const stringToColor = (str: string, saturation = 80, lightness = 50) => {
	let hash = 0
	for (let i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash)
	}

	const hue = hash % 360
	return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

export const stringAvatar = (name: string) => {
	const words = name.split(' ')
	let initials = ''

	for (let i = 0; i < words.length; i++) {
		if (words[i][0]) {
			initials += words[i][0]
		}
	}

	initials = initials.slice(0, 2).toUpperCase()
	return initials
}

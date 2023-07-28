import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'

//eslint-disable-next-line
//@ts-ignore
momentDurationFormatSetup(moment)

export const formatISO8601Duration = (duration: string) => {
	const formattedDuration = moment.duration(duration).format('h:mm:ss', 0, { stopTrim: 'm' })
	return formattedDuration
}

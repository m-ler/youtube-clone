import { SVGProps } from 'react';
const YoutubeMusic = (props: SVGProps<SVGSVGElement>) => (
	<svg {...props} viewBox="0 0 24 24">
		<circle cx={12} cy={12} r={10} fill="red" />
		<path fill="#FFF" d="M10 14.65v-5.3L15 12z" />
		<path
			fill="#FFF"
			d="M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0-1c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"
		/>
	</svg>
);
export default YoutubeMusic;

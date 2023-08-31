/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['i.ytimg.com'],
		unoptimized: true,
	},
	webpack(config) {
		// SVGR config
		const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))

		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/,
			},
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				resourceQuery: { not: /url/ },
				use: ['@svgr/webpack'],
			}
		)

		fileLoaderRule.exclude = /\.svg$/i
		return config
	},
}

module.exports = nextConfig
